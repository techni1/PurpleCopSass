<?php

namespace App\Http\Controllers;

use App\Http\Requests\SassPackageRequest;
use App\Http\Requests\UpdateSassPackageRequest;
use App\Http\Resources\SasspackageResource;
use App\Models\Menu;
use App\Models\Sasspackage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SassPackageController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:sasspackage-create|sasspackage-update|sasspackage-read|sasspackage-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:sasspackage-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:sasspackage-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:sasspackage-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $package = Sasspackage::get();

        return inertia("Sasspackage/Index", [
            'sass' => SasspackageResource::collection($package),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(SassPackageRequest $request)
    {

        $data = $request->validated();
        $data['short_desc'] = $request->input('short_desc');
        $data['custom_day'] = $request->input('custom_day');
        $data['instance_config_details'] = $request->input('instance_config_details');
        $data['file_storage'] = $request->input('file_storage');
        $data['assigned_personal_manager'] = $request->has('assigned_personal_manager') ? (int) $request->assigned_personal_manager : 0;
        $data['db_backup'] = $request->has('db_backup') ? (int) $request->db_backup : 0;
        $data['notification_email'] = $request->has('notification_email') ? (int) $request->notification_email : 0;
        $data['notification_sms'] = $request->has('notification_sms') ? (int) $request->notification_sms : 0;
        $data['notification_call'] = $request->has('notification_call') ? (int) $request->notification_call : 0;
        $data['custom_featured_request'] = $request->has('custom_featured_request') ? (int) $request->custom_featured_request : 0;
        $data['server_type'] = $request->input('server_type');
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        Sasspackage::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sasspackage $saaspackage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sasspackage $saaspackage)
    {
        $menu = Menu::findOrFail('1');
        return response()->json($menu);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function updatess(UpdateSassPackageRequest $request, Sasspackage $sasspackage)
    // {


    //     $updatedata = $request->validated();
    //     $updatedata['short_desc'] = $request->short_desc;
    //     $updatedata['custom_day'] = $request->custom_day;
    //     $updatedata['instance_config_details'] = $request->instance_config_details;
    //     $updatedata['file_storage'] = $request->file_storage;
    //     $updatedata['assigned_personal_manager'] = $request->has('assigned_personal_manager') ? (int)$request->assigned_personal_manager : 0;
    //     $updatedata['db_backup'] = $request->has('db_backup') ? (int)$request->db_backup : 0;
    //     $updatedata['notification_email'] = $request->has('notification_email') ? (int)$request->notification_email : 0;
    //     $updatedata['notification_sms'] = $request->has('notification_sms') ? (int)$request->notification_sms : 0;
    //     $updatedata['notification_call'] = $request->has('notification_call') ? (int)$request->notification_call : 0;
    //     $updatedata['custom_featured_request'] = $request->has('custom_featured_request') ? (int)$request->custom_featured_request : 0;

    //     $updatedata['server_type'] = $request->server_type;

    //     $updatedata['updated_by'] = Auth::id();
    //     $sasspackage->update($updatedata);
    // }


    public function update(UpdateSassPackageRequest $request, SassPackage $sasspackage)
    {
        $validatedData = $request->validated();
        $updatedata = $validatedData;
        $updatedata['custom_day'] = $request->custom_day;
        $updatedata['instance_config_details'] = $request->instance_config_details;
        $updatedata['file_storage'] = $request->file_storage;

        // Ensure optional fields are handled
        $updatedata['assigned_personal_manager'] = $request->has('assigned_personal_manager') ? (int) $request->assigned_personal_manager : 0;
        $updatedata['db_backup'] = $request->has('db_backup') ? (int) $request->db_backup : 0;
        $updatedata['notification_email'] = $request->has('notification_email') ? (int) $request->notification_email : 0;
        $updatedata['notification_sms'] = $request->has('notification_sms') ? (int) $request->notification_sms : 0;
        $updatedata['notification_call'] = $request->has('notification_call') ? (int) $request->notification_call : 0;
        $updatedata['custom_featured_request'] = $request->has('custom_featured_request') ? (int) $request->custom_featured_request : 0;

        $updatedata['server_type'] = $request->server_type;
        $updatedata['updated_by'] = Auth::id();
        $sasspackage->update($updatedata);

        //return redirect()->back()->with('success', 'Package updated successfully!');
    }







    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sasspackage $saaspackage)
    {
        //
    }
}
