<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAccountSetupRequest;
use App\Http\Resources\AccountSetupResource;
use App\Models\AccountSetup;
use App\Models\Billing;
use App\Models\Entity;
use App\Models\Organization;
use App\Models\Sasspackage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountSetupController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:accountsetup-create|accountsetup-update|accountsetup-read|accountsetup-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:accountsetup-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:accountsetup-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:accountsetup-delete', ['only' => ['destroy']]);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $accountSetups = AccountSetup::latest()->get();
        $organizations = Organization::whereHas('billings')->get();

        return inertia('AccountSetup/Index', [
            'accountSetups' => AccountSetupResource::collection($accountSetups),
            'organizations' => $organizations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $organizations = Organization::with('billing')->get();


        $entities = Entity::all();
        $packages = Sasspackage::all();

        return inertia('AccountSetup/Create', [
            'organizations' => $organizations,
            'entities' => $entities,
            'packages' => $packages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAccountSetupRequest $request)
    {
        $data = $request->validated();

        $billing = Billing::where('organization_id', $request->organization_id)->latest()->first();

        if ($billing == null) {
            return back()->withErrors(['error' => 'Billing details not found for this organization']);
        }

        $packageid = $billing->package_id;

        $data['entity_id'] = $request->entity_id;
        $data['packasge_id'] = $packageid;
        $data['description'] = $request->description;
        $data['db_driver'] = $request->db_driver;
        $data['status'] = '1';
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        AccountSetup::create($data);

        return redirect()->route('accountsetup.index')->with('success', 'Account setup created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(AccountSetup $accountSetup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AccountSetup $accountSetup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AccountSetup $accountSetup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AccountSetup $accountSetup)
    {
        //
    }
}
