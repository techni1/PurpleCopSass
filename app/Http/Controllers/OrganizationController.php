<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use App\Http\Resources\EntityResource;
use App\Http\Resources\OrganizationResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class OrganizationController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:organization-create|organization-update|organization-read|organization-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:organization-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:organization-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:organization-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organizations = Organization::with(['createdBy', 'updatedBy'])->get();
        return inertia('Organization/Index', [
            'organizations' => OrganizationResource::collection($organizations),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $securityOfficers= User::role('Security Officer')->get();
        $securityOfficers = User::whereHas('roles', function ($query) {
            $query->where('name', 'Security Officer');
        })->get();
        return inertia("Organization/Create", [
            'securityOfficers' => UserResource::collection($securityOfficers)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrganizationRequest $request)
    {
        $data = $request->validated();
        $logo = $data['logo'] ?? null;
        $data['legal_name'] = $data['legalName'];
        $data['security_officer'] = $data['securityOfficer'];
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($logo) {
            $data['logo_path'] = $logo->store('project/' . Str::random(), 'public');
        }
        $name = $data['name'];
        Organization::create($data);
        return to_route('organization.index')->with('success', "Client \"$name\" was Created");
    }

    /**
     * Display the specified resource.
     */
    public function show(Organization $organization)
    {
        // $entity = $organization->entities;
        // $entities = EntityResource::collection($entity);
        return inertia('Organization/OrganizationOverview/Show', [
            // 'entities' => $entities,
            'organization' => new OrganizationResource($organization),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        $securityOfficers = User::whereHas('roles', function ($query) {
            $query->where('name', 'Security Officer');
        })->get();
        return inertia('Organization/Edit', [
            'client' => new OrganizationResource($organization),
            'securityOfficers' => UserResource::collection($securityOfficers)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationRequest $request, Organization $organization)
    {
        $data = $request->validated();
        $logo = $data['logo'] ?? null;
        $data['updated_by'] = Auth::id();
        $data['security_officer'] = $data['securityOfficer'];
        if ($logo) {
            if ($organization->logo_path) {
                Storage::disk('public')->deleteDirectory(dirname($organization->logo_path));
            }
            $data['logo_path'] = $logo->store('project/' . Str::random(), 'public');
        }
        $organization->update($data);

        return to_route('organization.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        $name = $organization->name;
        $logoPath = $organization->logo_path;
        $organization->delete();
        if ($logoPath) {
            Storage::disk('public')->deleteDirectory(dirname($logoPath));
        }
        return to_route('organization.index')->with('success', "Organization \"$name\" was deleted");
    }
}