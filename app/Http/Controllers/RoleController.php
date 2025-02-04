<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Http\Resources\RoleResource;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;




class RoleController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:role-create|role-update|role-read|role-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:role-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:role-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:role-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::with('permissions')->get();
        // $role = Role::all();
        return inertia("Role/Index", [
            "roles" => RoleResource::collection($roles),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $permission = Permission::query()->orderBy('name', 'asc')->get();
        return inertia("Role/Create", [
            "permissions" => $permission,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|unique:roles,name',
            'permission' => 'required|array',

        ]);
        $role = Role::create(['name' => $request->input('name')]);
        //$role->syncPermissions($request->input('permission'));
        if (!empty($request->input('permission'))) {
            $numericPermissionArray = [];
            foreach ($request->input('permission') as $permission) {
                $numericPermissionArray[] = intval($permission);
            }
            $role->syncPermissions($numericPermissionArray);
            //$role->syncPermissions($request->input('permission'));
        }
        // $role->syncPermissions($request->input('permission'));
        return redirect()->route('role.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        $rolePermissions = $role->permissions()->pluck('id')->toArray();
        $permission = Permission::query()->orderBy('name', 'asc')->get();
        return inertia("Role/Edit", [
            'role' => new RoleResource($role),
            "permissions" => $permission,
            'rolePermissions' => $rolePermissions,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        $this->validate($request, [
            'name' => 'required|unique:roles,name,' . $role->id,
            'permission' => 'required|array',
        ]);
        $role->update(['name' => $request->input('name')]);
        if (!empty($request->input('permission'))) {
            $numericPermissionArray = [];
            foreach ($request->input('permission') as $permission) {
                $numericPermissionArray[] = intval($permission);
            }
            $role->syncPermissions($numericPermissionArray);
            //$role->syncPermissions($request->input('permission'));
        }
        return to_route('role.index')->with("success", "Role has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();
        return back()->with("success", "Role Deleted");
    }
}
