<?php

namespace App\Http\Controllers;

use App\Http\Resources\SmtpSettingResource;
use App\Models\SmtpSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SmtpSettingController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:smtpsetting-create|smtpsetting-update|smtpsetting-read|smtpsetting-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:smtpsetting-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:smtpsetting-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:smtpsetting-delete', ['only' => ['destroy']]);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $smtp = SmtpSetting::first();
        return inertia("Smtp/Index", [
            'smtp' => $smtp,
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SmtpSetting $smtpSetting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SmtpSetting $smtpSetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SmtpSetting $smtpSetting)
    {
        $validated = $request->validate([
            'host' => 'required|string',
            'port' => 'required|integer',
            'username' => 'required|string',
            'password' => 'required|string',
            'encryption' => 'required|string',
        ]);
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        $smtpSetting->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SmtpSetting $smtpSetting)
    {
        //
    }
}
