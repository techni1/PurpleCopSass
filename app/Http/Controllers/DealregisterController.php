<?php

namespace App\Http\Controllers;

use App\Models\DealExtentionRequest;
use App\Models\Dealregister;
use App\Models\User;
use App\Notifications\DealExtentionNotification;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;

class DealregisterController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:dealregister-create|dealregister-update|dealregister-read|dealregister-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:dealregister-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:dealregister-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:dealregister-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */

    public function menu()
    {
        return inertia('Dealregister/Menu');
    }

    public function index()
    {

        $isPartner = auth()->user()->hasRole('partner');


        if ($isPartner) {
            $dealregisters = Dealregister::with(['createdBy', 'updatedBy'])->where('partner_id', auth()->user()->id)->get();
        } else {
            $dealregisters = Dealregister::with(['createdBy', 'updatedBy'])->get();
        }

        $dealregisters = Dealregister::with(['createdBy', 'updatedBy'])->get();




        return inertia('Dealregister/Index', [
            'dealregister' => $dealregisters,
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

        $request->validate(
            [
                'deal_name' => 'required',
                'contact_person' => 'required',
                'contact_number' => 'required',
                'expiry_date' => 'required|date',
            ],
            [
                'deal_name.required' => 'Deal Name is required',
                'contact_person.required' => 'Contact Person is required',
                'contact_number.required' => 'Contact Number is required',
                'expiry_date.required' => 'Expiry Date is required',
            ]
        );

        $dealregister = new Dealregister();
        $dealregister->partner_id = auth()->user()->id;
        $dealregister->deal_name = $request->deal_name;
        $dealregister->contact_person = $request->contact_person;
        $dealregister->contact_number = $request->contact_number;
        $dealregister->contact_email = $request->contact_email;
        $dealregister->expiry_date = $request->expiry_date;
        $dealregister->extension_date = $request->expiry_date;
        $dealregister->deal_value = $request->deal_value;
        $dealregister->deal_status = $request->deal_status;
        $dealregister->deal_description = $request->deal_description;
        $dealregister->deal_source = $request->deal_source;
        $dealregister->created_by = auth()->user()->id;
        $dealregister->updated_by = auth()->user()->id;
        $dealregister->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {}

    public function extension(Request $request, string $id)
    {
        $request->validate(
            [
                'extension_date' => 'required|date',
                'extension_reason' => 'required',
            ],
            [
                'extension_date.required' => 'Extension Date is required',
                'extension_reason.required' => 'Extension Reason is required',
            ]
        );
        $dealregister = Dealregister::find($id);
        $usrName = auth()->user()->name;
        $usersToNotify = [];

        $dealregisterEx = new DealExtentionRequest();
        $dealregisterEx->dealregister_id = $id;
        $dealregisterEx->partner_id = auth()->user()->id;
        $dealregisterEx->extension_date = $request->extension_date;
        $dealregisterEx->extension_reason = $request->extension_reason;
        $dealregisterEx->created_by = auth()->user()->id;

        $adminUser = User::with('roles')
            ->where('organization_id', Auth::user()->organization_id)
            ->whereHas('roles', function ($query) {
                $query->where('name', 'Admin')
                    ->orWhere('name', 'Super-Admin');
            })
            ->firstOrFail();

        if ($adminUser->id !== Auth::id()) {
            $usersToNotify[] = $adminUser;
        }
        if ($dealregisterEx->save()) {

            if (!empty($usersToNotify)) {
                $name = $dealregister->deal_name;
                $routeTo = url("/dealregister/{$dealregister->id}");
                $msgtype = "Deal Extention Request";
                $message = 'Deal Extention Request Request by ' . $usrName;
                Notification::send($usersToNotify, new DealExtentionNotification([
                    'type' => $msgtype,
                    'name' => $name,
                    'message' => $message,
                    'url' => $routeTo,
                ]));
            }
        }
    }



    public function getDealExtensionRequest()
    {
        $dealExtensionRequest = DealExtentionRequest::with(['dealregister', 'partner'])->get();
        return inertia('Dealregister/ExtensionReq/Index', [
            'dealextension' => $dealExtensionRequest,
            'success' => session("success"),
        ]);
    }


    public function extensionshow(Request $request, string $id)
    {




        $dealExtensionRequest = DealExtentionRequest::with(['dealregister', 'partner'])->find($id);
        return inertia('Dealregister/ExtensionReq/Show', [
            'dealextension' => $dealExtensionRequest,
            'success' => session("success"),
        ]);
    }


    public function extensionstore(Request $request)
    {
        // Validate input
        $request->validate([
            'dealregister_id' => 'required|exists:deal_extention_requests,id',
            'status' => 'required|in:pending,approved,rejected',
            'extension_date' => 'nullable|date',
        ]);

        $dealextension = DealExtentionRequest::find($request->dealregister_id);

        if (!$dealextension) {
            return redirect()->back()->with('error', 'Deal extension request not found.');
        } else {
            $updateData = [
                'status' => $request->status,
                'updated_by' => auth()->user()->id,
            ];
            if ($request->has('extension_date')) {
                $updateData['approved_expirydate'] = $request->extension_date;
            }
            $dealextension->update($updateData);

            if ($request->has('extension_date')) {
                $deal = Dealregister::find($dealextension->dealregister_id)->update([
                    'extension_date' => $request->extension_date,
                ]);
            }
        }


        return redirect()->route('dealregister.getDealExtensionRequest')->with('success', 'Deal extension request updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}