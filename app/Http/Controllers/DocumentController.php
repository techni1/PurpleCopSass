<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Http\Resources\DocumentAccessResource;
use App\Http\Resources\DocumentResource;
use App\Models\DocumentAccess;
use App\Models\DocumentCategory;
use App\Models\OrganizationEvidence;
use App\Models\OrganizationPolicy;
use App\Models\User;
use App\Notifications\PolicyNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        // if ($user->roles[0]->name == "Super_admin")
        // $documents = Document::with('createdBy', 'category')->get();
        $documents = Document::with('createdBy', 'category')->where('organization_id', $user->organization_id)->get();
        return inertia("Document/Index", [
            'documents' => DocumentResource::collection($documents)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = DocumentCategory::all();
        return inertia('Document/Create', [
            'categories' => $category
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentRequest $request)
    {
        // dd($request);
        $category = DocumentCategory::where('name', $request->document_category)->first();
        $data = $request->validated();
        $data['document_category_id'] = $category->id;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $file = $data['attachment'] ?? null;
        $data['name'] = $file->getClientOriginalName();
        if ($file) {
            $data['document_path'] = $file->storeAs('attachments/' . Str::random(), $data['name'], 'public');
        }
        if ($type = $request->type) {
            $usersToNotify = [];

            $document = new Document($data);
            $modelId = $request->model_id;
            $organization = $type::find($modelId);
            $organization->documents()->save($document);
            if ($organization && $request->user != "Admin") {
                $adminUser = User::with('roles')
                    ->where('organization_id', $organization->organization_id)
                    ->whereHas('roles', function ($query) {
                        $query->where('name', 'Admin');
                    })
                    ->firstOrFail();
                $usersToNotify[] = $adminUser;
            }
            if ($organization->policy || $organization->evidence) {
                $updated = $organization->update(['assignee_status' => 'complete']);
                if ($updated) {
                    if (isset($organization->approver_id)) {
                        $usersToNotify[] = $organization->approver;
                    }
                }
            }
            if ($request->user == "Admin") {
                $organization->update(['assignee_id' => Auth::id()]);
            }
            if (!empty($usersToNotify)) {
                $name = '';
                $routeTo = '';
                $msgtype = "";
                $message = 'Document Uploaded by Assignee';
                if ($organization->policy) {
                    $name = $organization->policy->name;
                    $routeTo = url("/organizationpolicy/{$organization->id}");
                    $msgtype = 'Policy';
                } elseif ($organization->evidence) {
                    $name = $organization->evidence->name;
                    $routeTo = url("/organizationevidence/{$organization->id}");
                    $msgtype = 'Evidence';
                }
                Notification::send($usersToNotify, new PolicyNotification([
                    'id' => $organization->id,
                    'type' => $msgtype,
                    'name' => $name,
                    'message' => $message,
                    'url' => $routeTo,
                ]));
            }
            return back()->with('success', "File Uploaded");
        }
        Document::create($data);
        // return to_route('document.index')->with('success', "File Uploaded");
    }

    /**
     * Display the specified resource.
     */
    public function show(document $document)
    {
        // dd($document->id);
        $documentAccessList = DocumentAccess::where('document_id', $document->id)->with('user')->get();
        $document->load('documentable', 'createdBy', 'category');
        return inertia("Document/Show", [
            'document' => new DocumentResource($document),
            'documentAccessList' => DocumentAccessResource::collection($documentAccessList),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentRequest $request, document $document)
    {
        $data = $request->validated();
        $document->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(document $document)
    {
        $organization = $document->documentable;

        $adminUser = User::with('roles')
            ->where('organization_id', $organization->organization_id)
            ->whereHas('roles', function ($query) {
                $query->where('name', 'Admin');
            })
            ->firstOrFail();
        $data['assignee_status'] = 'pending';
        $data['updated_by'] = Auth::id();
        Storage::disk('public')->deleteDirectory(dirname($document->document_path));
        // $documentLeft = Document::where('documentable_type', $document->documentable_type)->where('documentable_id', $document->documentable_id)->get();
        $updated = $organization->update($data);
        $usersToNotify = [];
        if ($updated) {
            if (isset($organization->assignee_id) || $organization->assignee_id != $adminUser->id) {
                $usersToNotify[] = $organization->assignee;
            }

            if (isset($organization->approver_id) || $organization->approver_id != $adminUser->id) {
                $usersToNotify[] = $organization->approver;
            }
        }

        if (!empty($usersToNotify)) {
            $name = '';
            $routeTo = '';
            $msgtype = "";
            $message = 'Document deleted by Assignee';
            if ($organization->policy) {
                $name = $organization->policy->name;
                $routeTo = url("/organizationpolicy/{$organization->id}");
                $msgtype = 'Policy';
            } elseif ($organization->evidence) {
                $name = $organization->evidence->name;
                $routeTo = url("/organizationevidence/{$organization->id}");
                $msgtype = 'Evidence';
            }
            Notification::send($usersToNotify, new PolicyNotification([
                'id' => $organization->id,
                'type' => $msgtype,
                'name' => $name,
                'message' => $message,
                'url' => $routeTo,
            ]));
        }
        $document->delete();
    }
}
