<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Spatie\Permission\Models\Permission;



class PermissionsController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:permissions-create|permissions-update|permissions-read|permissions-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:permissions-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:permissions-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:permissions-delete', ['only' => ['destroy']]);
    }

    public function index()
    {

        $permissions = Permission::all();
        return inertia("Permission/Index", [
            "permissions" => $permissions,
            'success' => session("success"),
        ]);
    }

    public function create()
    {

        return inertia("Permission/Create");
    }
    public function edit()
    {

        // return inertia("Permission/Create");
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'names' => 'required|string',
        ]);

        $permissionNames = explode(',', $request->input('names'));
        $createdPermissions = [];

        foreach ($permissionNames as $name) {
            $name = trim($name);  // Remove any extra spaces
            if (!empty($name)) {
                // Check if permission already exists or create it if it doesn't
                $permission = Permission::firstOrCreate(['name' => $name]);

                // Add to the created permissions array
                $createdPermissions[] = $permission->name;
            }
        }

        return redirect()->route('permission.index')->with('success', 'Permissions created: ' . implode(', ', $createdPermissions));
    }

    // public function store(Request $request)
    // {

    //     // dd($request);
    //     $this->validate($request, [
    //         'name' => 'required|unique:permissions,name',
    //     ]);

    //     Permission::create(['name' => $request->input('name')]);

    //     return redirect()->route('permission.index');
    // }

    public function destroy(Permission $permission)
    {
        $permission->delete();
        return back()->with("success", 'Permission Deleted');
    }
}
