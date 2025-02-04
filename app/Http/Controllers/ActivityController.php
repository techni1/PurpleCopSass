<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use App\Models\Organization;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;

class ActivityController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:activity-create|activity-update|activity-read|activity-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:activity-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:activity-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:activity-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $activityLogs = Activity::with('causer', 'subject')
            ->orderBy('id', 'desc')
            ->get();

        return inertia("ActivityLogs/Index", [
            'activitylogs' => $activityLogs,
        ]);
    }

    // public function showmodel(Request $request)
    // {
    //     $activityLogs = Activity::where('log_name', $request->model)->with('causer', 'subject')->get();
    //     return inertia("ActivityLog/ShowModel", [
    //         'activitylogs' => $activityLogs,
    //     ]);
    // }

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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Activity $activity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity)
    {
        //
    }
}
