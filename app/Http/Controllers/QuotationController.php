<?php

namespace App\Http\Controllers;

use App\Http\Requests\BillingRequest;
use App\Http\Requests\StoreQuotationsRequest;
use App\Http\Resources\QuotationResource;
use App\Models\Billing;
use App\Models\BankDetails;

use App\Models\Entity;
use App\Models\FramworkPrice;
use App\Models\MasterSetting;
use App\Models\Offers;
use App\Models\Organization;
use App\Models\Quotation;
use App\Models\Sasspackage;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use InvalidArgumentException;
use Illuminate\Support\Facades\Redirect;

class QuotationController extends Controller
{


    function __construct()
    {
        $this->middleware('permission:quotation-create|quotation-update|quotation-read|quotation-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:quotation-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:quotation-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:quotation-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        if (auth()->user()->hasRole('Partner')) {
            $quotiaon = Quotation::where('created_by', Auth::id())->latest()->get();
        } else {
            $quotiaon = Quotation::latest()->get();
        }


        // organization 
        $organization = Organization::where('status', '1')->get();
        // entity
        $entity = Entity::all();
        //package
        $package = Sasspackage::all();
        //offers
        $offers = Offers::all();
        //framwork
        $framwork = FramworkPrice::all();
        //master 
        $mastersetting = MasterSetting::all();
        $bank = BankDetails::all();


        return inertia("Billing/Quotation/Index", [
            'billing' => QuotationResource::collection($quotiaon),
            'organization' => $organization,
            'bank' => $bank,
            'entity' => $entity,
            'packagedata' => $package,
            'offers' => $offers,
            'framwork' => $framwork,
            'mastersetting' => $mastersetting,
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


    /*-------- BOF Next billing Date ---------------*/


    function calculateNextBillingDate($billingDate, $frequency, $customDays = null)
    {
        // Convert the billing date to a Carbon instance
        $billingDate = Carbon::parse($billingDate);

        switch ($frequency) {
            case 'monthly':
                return $billingDate->addMonth()->toDateString();
            case 'quarterly':
                return $billingDate->addMonths(3)->toDateString();
            case 'yearly':
                return $billingDate->addYear()->toDateString();
            case 'custom':
                if ($customDays !== null && is_numeric($customDays)) {
                    return $billingDate->addDays($customDays)->toDateString();
                }
                throw new InvalidArgumentException('Custom days must be a numeric value.');
            default:
                throw new InvalidArgumentException('Invalid billing frequency.');
        }
    }
    /*-------- EOF Next billing Date ---------------*/


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuotationsRequest $request)
    {
        $data = $request->validated();
        // Get Package subscription 

        $package = Sasspackage::find($request->packageRate);

        $subscription = $package->payment_type;

        $customDays = '';


        if ($subscription == 'custom') {
            $customDays =  $package->custom_day;
        }

        $nextBillingdate = $this->calculateNextBillingDate($request->invoice_date, $subscription, $customDays ?? null);

        $data['ponumber'] =  $request->ponumber;
        $data['payment_term'] =  $request->payment_term;
        $data['item_desc'] =  json_encode($request->items);
        $data['subtotal'] =  $request->finalAmount;
        $data['tax'] =  $request->taxRate;
        $data['taxable_total'] =  $request->taxAmount;
        $data['package_id'] =  $request->packageRate;
        $data['offer_id'] =  $request->discountRate;
        $data['discount_amt'] =  '0.00';
        $data['final_amount'] =  $request->billingAmount;
        $data['bank'] =  $request->bank_details;
        $data['terms'] =  $request->paymentnotes;
        $data['next_billingdate'] =   $nextBillingdate;
        $data['billing_type'] = 'One Time';
        $data['billing_cycle'] = 'Monthly';
        $data['billing_status'] = 'quotation';
        $data['quotation_by'] =  Auth::id();
        $data['quotation_date'] = date('Y-m-d h:i:s');
        if (auth()->user()->hasRole('Partner')) {
            $data['iscreate_partner'] = '1';
        }

        $data['created_by'] =  Auth::id();

        try {
            Quotation::create($data);
            return Redirect::route('quotation.index')->with('success', 'Quotation created successfully.');
        } catch (\Exception $e) {
            return Redirect::back()->withErrors($e->getMessage())->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Quotation $quotation)
    {
        $billingJson = json_decode($quotation->item_desc);


        $itemdata = array();

        foreach ($billingJson as $billingItems) {
            $itemdata[] = array(
                'framwork' => FramworkPrice::getFramworkName(1),
                'unitPrice' => $billingItems->unitPrice,
                'qty' => $billingItems->qty,
                'hsn' => $billingItems->hsn,
                'singleAmt' => $billingItems->singleAmt,
            );
        }

        $organizationDetails = $quotation->organization_id ? Organization::getOrganizationDetails($quotation->organization_id) : '';
        $entityDetails = $quotation->entity_id ? Entity::getEntity($quotation->entity_id) : '';
        $packageDetails = $quotation->package_id ? Sasspackage::sasspackageName($quotation->package_id) : '';
        $offerDetails = $quotation->offer_id ? Offers::offersName($quotation->offer_id) : '';
        $bankDetails = $quotation->bank_deatils ? BankDetails::bankDetails($quotation->bank_deatils) : '';

        $showData =  [
            'id' => $quotation->id,
            'organization_id' => $organizationDetails,
            'entity_id' => $entityDetails,
            'package_id' => $packageDetails,
            'offer_id' => $offerDetails,
            'invoce_no' => $quotation->invoce_no,
            'invoice_date' => $quotation->invoice_date,
            'invoice_due_date' => $quotation->invoice_due_date,
            'ponumber' => $quotation->ponumber,
            'payment_term' => $quotation->payment_term,
            'item_desc' => $itemdata,
            'subtotal' => $quotation->subtotal,
            'tax' => $quotation->tax,
            'taxable_total' => $quotation->taxable_total,
            'hsn' => $quotation->hsn,
            'discount_amt' => $quotation->discount_amt,
            'billingAmount' => $quotation->billingAmount,
            'bank_deatils' => $bankDetails,
            'term_id' => $quotation->term_id,
            'notes' => $quotation->notes,
            'bank' => $quotation->bank,
            'terms' => $quotation->terms,
            'reason_for_calcellation' => $quotation->reason_for_calcellation,
            'reson_notes' => $quotation->reson_notes,
            'next_billingdate' => $quotation->next_billingdate,
            'billing_status' => $quotation->billing_status,
            'created_by' => User::userName($quotation->created_by),
            'updated_by' => User::userName($quotation->updated_by),
            'created_at' => Carbon::parse($quotation->created_at)->format('Y-m-d h:i:s'),
            'updated_at' => Carbon::parse($quotation->updated_at)->format('Y-m-d h:i:s')
        ];

        return inertia("Billing/Quotation/Show", [
            'billing' => $showData,
            'success' => session("success"),
        ]);
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function movetobilling(Request $request)
    {


        $request->validate([
            'id' => 'required|exists:quotations,id',
        ]);

        // Get Quqation data 

        $quotation = Quotation::find($request->id);

        // insert into billing table

        $data = [
            'organization_id' => $quotation->organization_id,
            'entity_id' => $quotation->entity_id,
            'package_id' => $quotation->package_id,
            'offer_id' => $quotation->offer_id,
            'invoce_no' => $quotation->invoce_no,
            'invoice_date' => $quotation->invoice_date,
            'invoice_due_date' => $quotation->invoice_due_date,
            'ponumber' => $quotation->ponumber,
            'payment_term' => $quotation->payment_term,
            'item_desc' => $quotation->item_desc,
            'subtotal' => $quotation->subtotal,
            'tax' => $quotation->tax,
            'taxable_total' => $quotation->taxable_total,
            'bank_details' => $quotation->bank_details,
            'billing_status' => 'New',
            'billing_type' => 'One Time',
            'billing_cycle' => 'Monthly',
            'payment_status' => 'Pending',
            'discount_amt' => $quotation->discount_amt,
            'billingAmount' => $quotation->final_amount,
            'bank_deatils' => $quotation->bank_deatils,
            'next_billingdate' => $quotation->next_billingdate,
            'notes' => $quotation->notes,
            'created_by' => Auth::id(),
            'updated_by' => Auth::id(),
        ];


        try {
            Billing::create($data);
            $quotation->billing_status = 'billing';
            $quotation->save();
            return Redirect::route('billing.index')->with('success', 'Quotation moved to billing successfully.');
        } catch (\Exception $e) {
            return Redirect::back()->withErrors($e->getMessage())->withInput();
        }
    }
}
