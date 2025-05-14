<?php


namespace App\Http\Controllers;

set_time_limit(0); // Removes time limit
use App\Http\Requests\StoreAccountSetupRequest;
use App\Http\Resources\AccountSetupResource;
use App\Models\AccountSetup;
use App\Models\Billing;
use App\Models\Entity;
use App\Models\Organization;
use App\Models\Sasspackage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Config;

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

    private function cloneDatabase($sourceDB, $newDB, $dbUser, $dbPassword)
    {
        $sourceDB = 'grc_sass';
        $newDB = 'grc_sass';
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


        // echo 'base_path: ' . . '<br>';
        echo 'folder_name: ' . $request->folder_name . '<br>';
        echo 'db_name: ' . $request->db_name . '<br>';
        echo 'db_username: ' . $request->db_username . '<br>';
        // exit;
        // $newFolder = base_path($request->folder_name);
        // $sourceFolder = base_path('grc');

        $newDbName = $request->db_name;
        $sourceDb = 'grc_sass';
        $dbUser = $request->db_username;
        $dbPassword = '';

        $sourceFolder = "F:\\wamp64\\www\\" . 'grc';
        $customPath = "F:\\wamp64\\www\\" . $request->folder_name;

        try {

            File::makeDirectory($customPath, 0755, true, true);
            File::copyDirectory($sourceFolder, $customPath);
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'An error occurred during account setup: ' . $e->getMessage()]);
        }

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
