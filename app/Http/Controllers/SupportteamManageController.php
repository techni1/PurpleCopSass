<?php

namespace App\Http\Controllers;

use App\Http\Requests\SupportteamManageRequest;
use App\Http\Resources\SupportteamManageResource;
use App\Models\Department;
use App\Models\SupportteamManage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SupportteamManageController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:supportteammange-create|supportteammange-update|supportteammange-read|supportteammange-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:supportteammange-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:supportteammange-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:supportteammange-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $supportteam = SupportteamManage::latest()->get();
        $departments = Department::all();


        $supportTeamUsers = User::role('Support Team')->get();

        return inertia("Support/Team/Index", [
            'supportteam' => SupportteamManageResource::collection($supportteam),
            'users' => $supportTeamUsers,
            'departments' => $departments,
            'success' => session("success"),
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
    public function store(SupportteamManageRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        SupportteamManage::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(SupportteamManage $supportteamManage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SupportteamManage $supportteamManage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SupportteamManage $supportteamManage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SupportteamManage $supportteamManage)
    {
        //
    }
}
