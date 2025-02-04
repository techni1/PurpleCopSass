<?php

namespace App\Http\Controllers;

use App\Models\Designation;
use App\Http\Requests\StoreDesignationRequest;
use App\Http\Requests\UpdateDesignationRequest;
use App\Http\Resources\DesignationResource;
use Illuminate\Support\Facades\Auth;

class DesignationController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:designation-create|designation-delete|designation-read', ['only' => ['index,show']]);
        $this->middleware('permission:designation-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:designation-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:designation-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $designation = designation::with(['createdBy', 'updatedBy'])->get();
        return inertia("Designation/Index", [
            "designations" => DesignationResource::collection($designation),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Designation/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDesignationRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        Designation::create($data);
        $name = $data['name'];
        return to_route('designation.index')->with('success', "Designation \"$name\" was created ");
    }

    /**
     * Display the specified resource.
     */
    public function show(Designation $designation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Designation $designation)
    {
        return inertia('Designation/Edit', [
            'designation' => new DesignationResource($designation)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDesignationRequest $request, Designation $designation)
    {
        // dd($request);
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $designation->update($data);
        return to_route('designation.index')->with('success', "Designation \"$designation->name \" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Designation $designation)
    {
        $name = $designation->name;
        $designation->delete();
        return to_route('designation.index')->with('success', "Designation \"$name\" was deleted");
    }
}
