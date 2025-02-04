<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\Department;
use App\Models\Designation;
use App\Models\Nda;
use App\Models\Organization;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:user-create|user-update|user-read|user-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:user-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:user-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:user-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        // $userlist = User::all();
        $userlist = User::with(['roles', 'designation', 'department', 'organization',])->get();
        return inertia("User/Index", [
            "users" => UserResource::collection($userlist),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("User/Create", [
            'designations' => Designation::all(),
            'departments' => Department::all(),
            'organizations' => Organization::all(),
            'roles' => Role::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {

        $data = $request->validated();
        $profileImg = $data['profile_pic'] ?? null;
        if ($profileImg) {
            $data['profile_pic'] = $profileImg->store('user/' . Str::random(), 'public');
        }
        $data['added_by'] = $data['created_by'] ?? Auth::id();
        $data['updated_by'] = $data['updated_by'] ?? Auth::id();
        $data['password'] = bcrypt($data['password']);
        // $data['email_verified_at'] = time();
        // $data['password'] = Hash::make(Str::random(8));
        // $userRole = $data['user_role'];
        // unset($data['user_role']);
        // $data['user_role'] = '';
        $user = User::create($data);
        // dd($data['user_role']);
        $user->assignRole($data['user_role']);

        // $userId = $user->id;

        // if ($data['user_role'] != 'Guest') {
        //     return redirect()->route('user.index')->with('success', 'User was Created');
        // }
        // if ($data['user_role'] == 'Guest') {
        //     Nda::create([
        //         'user_id' => $userId,
        //         'organization' => $request->organization,
        //         'category' => $request->category,
        //         'created_by' => Auth::id(),
        //         'updated_by' => Auth::id(),
        //     ]);
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // dd($user);
        return inertia('User/Edit', [
            'designations' => Designation::all(),
            'departments' => Department::all(),
            'organizations' => Organization::all(),
            'roles' => Role::all(),
            'user' => new UserResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();

        $profileImg = $data['profile_pic'] ?? null;
        // dd($profileImg);

        if ($profileImg) {
            $data['user_profile_pic'] = $profileImg->store('user/' . Str::random(), 'public');
        }

        $user->update($data);
        // dd($user);
        if (!empty($data['user_role'])) {
            $user->syncRoles($data['user_role']);
        }
        // return redirect()->route('user.index')->with('success', 'User was updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name;
        $logoPath = $user->logo_path;
        $user->delete();
        if ($logoPath) {
            Storage::disk('public')->deleteDirectory(dirname($logoPath));
        }
        return to_route('user.index')->with('success', "User \"$name\" was deleted");
    }


    public function departmentuser($deptid)
    {


        $users = User::where('department_id', '=', $deptid)->get();


        return response()->json($users);
    }
}
