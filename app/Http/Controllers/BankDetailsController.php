<?php

namespace App\Http\Controllers;

use App\Http\Requests\BankDetailsRequest;
use App\Http\Requests\UpdateBankDetailsRequest;
use App\Http\Resources\BankDetailsResource;
use App\Models\BankDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BankDetailsController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:bankdetails-read|bankdetails-create|bankdetails-update|bankdetails-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:bankdetails-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:bankdetails-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:bankdetails-delete', ['only' => ['destroy']]);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $bank = BankDetails::all();
        return inertia('Bank/Index', [
            'bank' => BankDetailsResource::collection($bank),
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
    public function store(BankDetailsRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        BankDetails::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(BankDetails $bankdetails)
    {
        echo '<pre>';
        print_R($bankdetails);
        exit;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BankDetails $bankdetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBankDetailsRequest $request, BankDetails $bankdetails)
    {
        $bank_check = BankDetails::find($request->input('bankid'));

        if ($bank_check) {
            $updateBank['bank_name'] =  $request->input('bank_name');
            $updateBank['bank_accountname'] =  $request->input('bank_accountname');
            $updateBank['bank_accountno'] =  $request->input('bank_accountno');
            $updateBank['bank_ifsccode'] =  $request->input('bank_ifsccode');
            $updateBank['bank_swiftcode'] =  $request->input('bank_swiftcode');
            $updateBank['updated_by'] =  Auth::id();
        }

        $bank_check->update($updateBank);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BankDetails $bankdetails)
    {
        //
    }
}
