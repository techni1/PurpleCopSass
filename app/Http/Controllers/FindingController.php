<?php

namespace App\Http\Controllers;

use App\Models\Finding;
use App\Http\Requests\StoreFindingRequest;
use App\Http\Requests\UpdateFindingRequest;
use App\Http\Resources\FindingResource;
use App\Models\AuditCenter;
use App\Models\OrganizationEvidence;
use App\Models\OrganizationPolicy;
use App\Models\User;
use App\Notifications\FindingNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class FindingController extends Controller
{

    private function getAdminUser($organizationId)
    {
        return User::with('roles')
            ->where('organization_id', $organizationId)
            ->whereHas('roles', function ($query) {
                $query->where('name', 'Admin');
            })
            ->first();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreFindingRequest $request)
    {
        $data = $request->validated();
        $url = '';
        $name = '';
        $audit = AuditCenter::find($request->audit_id);
        $filePath = null;
        if ($request->hasFile('attachment')) {
            // $originalFileName = $request->file('attachment')->getClientOriginalName();
            $filePath = $request->file('attachment')->store('attachments', 'public');
        }
        $data['attachment_path'] = $filePath;
        if ($request->organization_evidence_id == null) {
            $organization = OrganizationPolicy::find($data['organization_policy_id']);
            $url = url("/organizationpolicy/{$organization->id}");
            $name = 'policy';
        }
        if ($request->organization_policy_id == null) {
            $organization = OrganizationEvidence::find($data['organization_evidence_id']);
            $url = url("/organizationevidence/{$organization->id}");
            $name = 'evidence';
        }
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $finding = new Finding($data);
        $organization->comments()->save($finding);
        $adminUser = $this->getAdminUser($organization->organization_id);
        $approver = User::find($organization->approver_id);
        Notification::send([$adminUser, $approver], new FindingNotification([
            'id' => $organization->id,
            'type' => 'Finding',
            'name' => $request->comment,
            'message' => $organization->$name->name . " (Audit:{$audit->name})",
            'url' => $url,
        ]));
    }

    /**
     * Display the specified resource.
     */
    public function show(Finding $finding)
    {
        $finding->load(
            'commentable',
            'auditor',
            'correctiveAction'
        );
        return inertia('Finding/Show', [
            'finding' => new FindingResource($finding),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Finding $finding)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFindingRequest $request, Finding $finding)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $updated = $finding->update($data);

        if ($updated) {
            $adminUser = $this->getAdminUser($finding->commentable->organization_id);
            // $approver = User::find($organization->approver_id);
            Notification::send([$adminUser], new FindingNotification([
                'id' => $finding->commentable->organization_i,
                'type' => 'Finding',
                'name' => $finding->comment,
                'message' => "Finding Status Closed",
                'url' => '/',
            ]));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Finding $finding)
    {
        //
    }
}
