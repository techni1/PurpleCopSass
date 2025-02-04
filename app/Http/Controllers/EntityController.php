<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use App\Http\Requests\StoreEntityRequest;
use App\Http\Requests\UpdateEntityRequest;
use App\Http\Resources\EntityResource;
use App\Http\Resources\OrganizationResource;
use App\Http\Resources\UserResource;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EntityController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:entity-create|entity-update|entity-read|entity-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:entity-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:entity-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:entity-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return inertia('Entity/Index');
        $securityOfficers = User::whereHas('roles', function ($query) {
            $query->where('name', 'Security Officer');
        })->with(['roles'])->get();
        $entities = Entity::with(['createdBy', 'updatedBy', 'organizations'])->get();
        return inertia('Entity/Index', [
            'entities' => EntityResource::collection($entities),
            "securityOfficers" => UserResource::collection($securityOfficers),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $securityOfficers = User::whereHas('roles', function ($query) {
            $query->where('name', 'Security Officer');
        })->get();

        if ($request->organization_id) {
            $organizations = Organization::where('id', $request->organization_id)->get();
        } else {
            $organizations = Organization::orderBy('name')->get();
        }
        // dd($organization);
        return inertia("Entity/Create", [
            'securityOfficers' => UserResource::collection($securityOfficers),
            'organizations' => OrganizationResource::collection($organizations),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEntityRequest $request)
    {
        // dd($request);
        $data = $request->validated();
        /** @var $logo \Illuminate\Http\UpLoadedFile */
        $logo = $data['logo'] ?? null;
        $data['legal_name'] = $data['legalName'];
        $data['security_officer'] = $data['securityOfficer'];
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($logo) {
            $data['logo_path'] = $logo->store('Entity/' . Str::random(), 'public');
        }
        $name = $data['name'];
        Entity::create($data);
        return to_route('entity.index')->with('success', "Entity \"$name\" was Created");
    }

    /**
     * Display the specified resource.
     */
    public function show(Entity $entity)
    {

        $securityOfficers = User::whereHas('roles', function ($query) {
            $query->where('name', 'Security Officer');
        })->with(['roles'])->get();
        return inertia('Entity/EntityOverview/Show', [
            'entity' => new EntityResource($entity),
            "securityOfficers" => UserResource::collection($securityOfficers),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Entity $entity)
    {
        $securityOfficers = User::whereHas('roles', function ($query) {
            $query->where('name', 'Security Officer');
        })->get();
        return inertia('Entity/Edit', [
            'client' => new EntityResource($entity),
            'securityOfficers' => UserResource::collection($securityOfficers)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEntityRequest $request, Entity $entity)
    {
        $data = $request->validated();
        $logo = $data['logo'] ?? null;
        $data['updated_by'] = Auth::id();
        $data['security_officer'] = $data['securityOfficer'];
        if ($logo) {
            if ($entity->logo_path) {
                Storage::disk('public')->deleteDirectory(dirname($entity->logo_path));
            }
            $data['logo_path'] = $logo->store('project/' . Str::random(), 'public');
        }
        $entity->update($data);
        return to_route('entity.index')->with("success", "Entity \"$entity->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Entity $entity)
    {
        $name = $entity->name;
        $logoPath = $entity->logo_path;
        $entity->delete();
        if ($logoPath) {
            Storage::disk('public')->deleteDirectory(dirname($logoPath));
        }
        return to_route('entity.index')->with('success', "Entity \"$name\" was deleted");
    }


    public function getEntity($organizationid)
    {
        $entities = Entity::where('organization_id', '=', $organizationid)->get();


        return response()->json($entities);
    }
}
