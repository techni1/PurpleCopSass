<?php

namespace App\Http\Controllers;

use App\Http\Requests\MasterSettingRequest;
use App\Http\Requests\UpdateMasterSettingRequest;
use App\Http\Resources\MasterSettingResource;
use App\Models\MasterSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MasterSettingController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:mastersetting-create|mastersetting-update|mastersetting-read|mastersetting-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:mastersetting-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:mastersetting-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:mastersetting-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $masterdata = MasterSetting::all();

        return inertia("Mastersetting/Index", [
            'mastersetting' => MasterSettingResource::collection($masterdata),
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
    public function store(MasterSettingRequest $request)
    {

        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        MasterSetting::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(MasterSetting $masterSetting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MasterSetting $masterSetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMasterSettingRequest $request, MasterSetting $mastersetting)
    {
        $updatedata = $request->validated();
        $updatedata['updated_by'] = Auth::id();
        $mastersetting->update($updatedata);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MasterSetting $masterSetting)
    {
        //
    }
}
