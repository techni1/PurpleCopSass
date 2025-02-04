<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Http\Resources\DepartmentResource;

class DepartmentController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:department-create|department-update|department-read|department-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:department-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:department-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:department-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $department = department::with(['createdBy', 'updatedBy'])->get();
        return inertia("Department/Index", [
            "departments" => DepartmentResource::collection($department),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Department/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDepartmentRequest $request)
    {
        $data = $request->validated();

        Department::create($data);
        $name = $data['name'];
        return to_route('department.index')->with('success', "Department \"$name\" was created ");
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        return inertia('Department/Edit', [
            'department' => new DepartmentResource($department)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        // dd($request);
        $data = $request->validated();

        $department->update($data);
        return to_route('department.index')->with('success', "Department \"$department->name \" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $name = $department->name;
        $department->delete();
        return to_route('department.index')->with('success', "Department \"$name\" was deleted");
    }
}
