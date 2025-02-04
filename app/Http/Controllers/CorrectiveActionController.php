<?php

namespace App\Http\Controllers;

use App\Models\CorrectiveAction;
use App\Http\Requests\StoreCorrectiveActionRequest;
use App\Http\Requests\UpdateCorrectiveActionRequest;
use App\Http\Resources\CorrectiveActionResource;
use App\Models\OrganizationEvidence;
use App\Models\OrganizationPolicy;
use App\Models\User;
use App\Notifications\CorrectiveActionNotification;
use App\Notifications\PolicyNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CorrectiveActionController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:corrective-action-create|corrective-action-update|corrective-action-read|corrective-action-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:corrective-action-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:corrective-action-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:corrective-action-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $correctiveActions = CorrectiveAction::with('source', 'assignee:id,name', 'createdBy:id,name')->get();
        return inertia('CorrectiveAction/Index', [
            'correctiveActions' => CorrectiveActionResource::collection($correctiveActions),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(StoreCorrectiveActionRequest $request)
    {
        $data = $request->validated();
        $denyData = $this->prepareDenyData($request->causer);

        // Handle file upload if present
        $data['attachment_path'] = $this->handleFileUpload($request);
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        // Create CorrectiveAction
        $result = CorrectiveAction::create($data);

        // Update related models based on causer and source_type
        if ($result) {
            if ($request->causer) {
                $this->updateSourceModel($request->source_type, $result->source_id, $denyData);
            }

            // Prepare an array for users to notify
            $usersToNotify = [];

            $adminUser = User::with('roles')
                ->where('organization_id', Auth::user()->organization_id)
                ->whereHas('roles', function ($query) {
                    $query->where('name', 'Admin');
                })
                ->firstOrFail();
            if ($adminUser->id !== Auth::id()) {
                $usersToNotify[] = $adminUser;
            }

            $assignee = User::find($result->assignee_id);
            $usersToNotify[] = $assignee;
            if (!empty($usersToNotify)) {
                $name = $result->non_conformity_name;
                $routeTo = url("/correctiveaction/{$result->id}");
                $msgtype = "Corrective Action";
                $message = 'Corrective Action assigned to ' . $assignee->name;
                Notification::send($usersToNotify, new CorrectiveActionNotification([
                    'type' => $msgtype,
                    'name' => $name,
                    'message' => $message,
                    'url' => $routeTo,
                ]));
            }
        }
    }

    private function prepareDenyData($causer)
    {
        // Default deny data
        $denyData = [
            "approver_status" => 'deny',
            'approver_completion_date' => Carbon::now()->toDateString(),
        ];

        // Mapping causer to their respective data
        $causerData = [
            'internal' => [
                "internal_auditor_status" => 'deny',
                'internal_auditor_completion_date' => Carbon::now()->toDateString(),
            ],
            'external' => [
                "external_auditor_status" => 'deny',
                'external_auditor_completion_date' => Carbon::now()->toDateString(),
            ],
        ];

        // Return causer data if found, otherwise default deny data
        return $causerData[$causer] ?? $denyData;
    }

    private function handleFileUpload($request)
    {
        if ($request->hasFile('attachment')) {
            return $request->file('attachment')->store('correctiveaction', 'public');
        }
        return null;
    }
    private function updateSourceModel($sourceType, $sourceId, $denyData)
    {
        $modelClass = null;
        $notificationType = null;
        $notificationUrl = null;

        switch ($sourceType) {
            case 'App\\Models\\OrganizationPolicy':
                $modelClass = OrganizationPolicy::class;
                $notificationType = 'Policy';
                $notificationUrl = "/organizationpolicy/{$sourceId}";
                break;
            case 'App\\Models\\OrganizationEvidence':
                $modelClass = OrganizationEvidence::class;
                $notificationType = 'Evidence';
                $notificationUrl = "/organizationevidence/{$sourceId}";
                break;
        }

        if ($modelClass) {
            $model = $modelClass::find($sourceId);
            if ($model && $model->update($denyData)) {
                $adminUser = $this->getAdminUser($model->organization_id);
                $this->notifyUsers($adminUser, $model, $notificationType, $notificationUrl);
            }
        }
    }

    private function getAdminUser($organizationId)
    {
        return User::with('roles')
            ->where('organization_id', $organizationId)
            ->whereHas('roles', function ($query) {
                $query->where('name', 'Admin');
            })
            ->first();
    }

    private function notifyUsers($adminUser, $model, $type, $url)
    {
        if ($adminUser && $adminUser->id !== Auth::id()) {
            Notification::send([$adminUser], new PolicyNotification([
                'id' => $model->id,
                'type' => $type,
                'name' => $model->{$type == 'Policy' ? 'policy' : 'evidence'}->name,
                'message' => "{$type} has been denied and needs a review",
                'url' => url($url),
            ]));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(CorrectiveAction $correctiveAction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CorrectiveAction $correctiveAction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCorrectiveActionRequest $request, CorrectiveAction $correctiveaction)
    {
        $prevAssignee = $correctiveaction->assignee_id;
        $data = $request->validated();

        $data['updated_by'] = Auth::id();

        $updated = $correctiveaction->update($data);
        if ($updated) {
            $message = 'Corrective Action Updated';

            $usersToNotify = [];
            $adminUser = $this->getAdminUser(Auth::user()->organization_id);
            $usersToNotify[] = $adminUser;
            if ($prevAssignee !== $correctiveaction->assignee_id) {
                $assignee = User::find($correctiveaction->assignee_id);
                $usersToNotify[] = $assignee;
                $message = 'Corrective Action assigned to ' . $assignee->name;
            }
            if ($request->status === 'close') {
                $message = 'Corrective action has been closed';
            }

            if (!empty($usersToNotify)) {
                Notification::send($usersToNotify, new CorrectiveActionNotification([
                    'type' => "Corrective Action",
                    'name' => $correctiveaction->non_conformity_name,
                    'message' => $message,
                    'url' => url("/correctiveaction"),
                ]));
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CorrectiveAction $correctiveaction)
    {
        $name = $correctiveaction->non_conformity_name;
        $deleted =  $correctiveaction->delete();

        if ($deleted) {
            $adminUser = $this->getAdminUser(Auth::user()->organization_id);
            if ($adminUser && $adminUser->id !== Auth::id()) {
                Notification::send([$adminUser], new CorrectiveActionNotification([
                    'type' => "Corrective Action",
                    'name' => $name,
                    'message' => "Corrective Action deleted",
                    'url' => '/',
                ]));
            }
        }
        // // return back()->with('success', "Corrective Action Deleted");
        // return back()->with('success', "CA Deleted");
    }
}