<?php

namespace App\Http\Controllers;

use App\Http\Requests\BillingRequest;
use App\Http\Resources\BillingResource;
use App\Models\BankDetails;
use App\Models\Billing;
use App\Models\Entity;
use App\Models\FramworkPrice;
use App\Models\MasterSetting;
use App\Models\Offers;
use App\Models\Organization;
use App\Models\Sasspackage;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use InvalidArgumentException;
use Spatie\LaravelPackageTools\Package;

class BillingController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:billing-create|billing-update|billing-read|billing-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:billing-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:billing-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:billing-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $billingdata = Billing::where('billing_status', '!=', 'quotation')->latest()->get();
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

        $partner_user = User::role('Partner')->get();


        return inertia("Billing/Index", [
            'billing' => BillingResource::collection($billingdata),
            'organization' => $organization,
            'bank' => $bank,
            'entity' => $entity,
            'packagedata' => $package,
            'offers' => $offers,
            'framwork' => $framwork,
            'mastersetting' => $mastersetting,
            'partneruser' => $partner_user,
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
    public function store(BillingRequest $request)
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
        $data['billingAmount'] =  $request->billingAmount;
        $data['bank'] =  $request->bank_details;
        $data['terms'] =  $request->paymentnotes;
        $data['next_billingdate'] =   $nextBillingdate;
        $data['billing_type'] = 'One Time';
        $data['billing_cycle'] =  $subscription;
        $data['payment_status'] = 'Pending';
        $data['billing_status'] = 'New';
        $data['created_by'] =  Auth::id();
        $data['updated_by'] = Auth::id();
        $data['partner_id'] = $request->partner_id;

        Billing::create($data);
    }
    public function quotationstore(BillingRequest $request)
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
        $data['billingAmount'] =  $request->billingAmount;
        $data['bank'] =  $request->bank_details;
        $data['terms'] =  $request->paymentnotes;
        $data['next_billingdate'] =   $nextBillingdate;
        $data['billing_type'] = 'One Time';
        $data['billing_cycle'] = 'Monthly';
        $data['payment_status'] = 'Pending';
        $data['billing_status'] = 'quotation';
        $data['quotation_by'] =  Auth::id();
        $data['quotation_date'] = date('Y-m-d h:i:s');
        $data['created_by'] =  Auth::id();

        Billing::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Billing $billing)
    {
        $billingJson = json_decode($billing->item_desc);

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

        $organizationDetails = $billing->organization_id ? Organization::getOrganizationDetails($billing->organization_id) : '';
        $entityDetails = $billing->entity_id ? Entity::getEntity($billing->entity_id) : '';
        $packageDetails = $billing->package_id ? Sasspackage::sasspackageName($billing->package_id) : '';
        $offerDetails = $billing->offer_id ? Offers::offersName($billing->offer_id) : '';
        $bankDetails = $billing->bank_deatils ? BankDetails::bankDetails($billing->bank_deatils) : '';

        $showData =  [
            'id' => $billing->id,
            'organization_id' => $organizationDetails,
            'entity_id' => $entityDetails,
            'package_id' => $packageDetails,
            'offer_id' => $offerDetails,
            'invoce_no' => $billing->invoce_no,
            'invoice_date' => $billing->invoice_date,
            'invoice_due_date' => $billing->invoice_due_date,
            'ponumber' => $billing->ponumber,
            'payment_term' => $billing->payment_term,
            'item_desc' => $itemdata,
            'subtotal' => $billing->subtotal,
            'tax' => $billing->tax,
            'taxable_total' => $billing->taxable_total,
            'hsn' => $billing->hsn,
            'discount_amt' => $billing->discount_amt,
            'billingAmount' => $billing->billingAmount,
            'bank_deatils' => $bankDetails,
            'term_id' => $billing->term_id,
            'notes' => $billing->notes,
            'bank' => $billing->bank,
            'terms' => $billing->terms,
            'reason_for_calcellation' => $billing->reason_for_calcellation,
            'reson_notes' => $billing->reson_notes,
            'next_billingdate' => $billing->next_billingdate,
            'billing_status' => $billing->billing_status,
            'cancel_by' => $billing->cancel_by,
            'created_by' => $billing->created_by,
            'updated_by' => $billing->updated_by,
            'created_at' => $billing->created_at,
            'updated_at' => $billing->updated_at
        ];

        return inertia("Billing/Show", [
            'billing' => $showData,
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Billing $billing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Billing $billing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Billing $billing)
    {
        //
    }

    public function getPrice($framworkid)
    {

        $framwork = FramworkPrice::find($framworkid);

        if ($framwork) {
            return response()->json(['price' => $framwork->framwork_price]);
        }
        return response()->json(['error' => 'Framework not found'], 404);
    }

    public function cancelinvoice(Request $request)
    {

        $validatedData = $request->validate([
            'invoiceid' => 'required',
            'reason_for_calcellation' => 'required|string|max:255',
        ]);


        if ($validatedData) {
            $billing = Billing::find($request->input('invoiceid'));
            $update_data['reason_for_calcellation'] = $request->input('reason_for_calcellation');
            $update_data['reson_notest'] = $request->input('reson_notest');
            $update_data['billing_status'] = 'Cancel';
            $update_data['cancel_by'] = Auth::id();
            $billing->update($update_data);
        }
    }



    public function menu()
    {
        return inertia('Billing/Menu');
    }


    public function regenrate(Request $request)
    {


        $check = Billing::find($request->invoiceid);

        // Get Package subscription 

        $package = Sasspackage::find($request->packageid);

        $subscription = $package->payment_type;

        $customDays = '';


        if ($subscription == 'custom') {
            $customDays =  $package->custom_day;
        }

        $nextBillingdate = $this->calculateNextBillingDate($request->invoice_date, $subscription, $customDays ?? null);


        if ($check) {
            $update['organization_id']  = $request->organization_id;
            if ($request->has('entity_id')) {
                $update['entity_id']  = $request->entity_id ? $request->entity_id : null;
            }
            $update['invoce_no']  = $request->invoce_no;
            $update['invoice_date']  = $request->invoice_date;
            $update['invoice_due_date']  = $request->invoice_due_date;
            $update['ponumber']  = $request->ponumber;
            $update['payment_term']  = $request->payment_term;
            $update['notes']  = $request->notes ?? null;
            $update['item_desc']  = json_encode($request->items);
            $update['package_id']  = $request->packageid;
            $update['offer_id']  = $request->discountId;
            $update['subtotal']  = $request->finalAmount;
            $update['tax']  = $request->taxRate ?? null;
            $update['billingAmount'] = $request->billingAmount;
            $update['next_billingdate'] = $nextBillingdate;
            $update['taxable_total']  = $request->taxAmount;
            $update['bank_deatils']  = $request->bank_details;
            $update['paymentnotes']  = $request->bank_details;
            $update['terms'] = $request->paymentnotes ?? null;
            $update['billing_status'] = 'Regenrate';
            $update['created_by'] = Auth::id();
            $update['updated_by'] = Auth::id();

            Billing::create($update);
        }
    }
    public function getBillingHistory(Request $request)
    {
        try {
            $query = Billing::query();

            if ($request->has('organization_id')) {
                $query->where('organization_id', $request->organization_id);
            }
            // Optional: Filter by date range
            if ($request->has(['start_date', 'end_date'])) {
                $query->whereBetween('invoice_date', [$request->start_date, $request->end_date]);
            }

            // Pagination (optional)
            $billingHistory = $query->with(['organization', 'entity', 'item_desc'])
                ->paginate($request->get('per_page', 15)); // Default to 15 per page


            return response()->json([
                'success' => true,
                'data' => $billingHistory,
            ]);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'Error fetching billing history',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    // public function accountcheck(Request $request)
    // {
    //     // Sample data or logic
    //     return response()->json([
    //         'status' => 'success',
    //         'message' => 'Billing account check successful',
    //     ]);
    // }

    public function accountcheck(Request $request)
    {

        try {

            $query = Billing::query();

            if ($request->has('organization_id')) {

                $query->where('organization_id', $request->organization_id);
            }
            if ($request->has(['start_date', 'end_date'])) {

                $query->whereBetween('invoice_date', [$request->start_date, $request->end_date]);
            }
            $checkdata = $query->get();
            $data = BillingResource::collection($checkdata);

            return response()->json([
                'success' => true,
                'data' => $data,
            ]);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'Error fetching billing history',
                'error' => $e->getMessage(),
            ], 500);
        }
    }



    public function loginCheck(Request $request)
    {

        try {
            $today = Carbon::today();
            $checkdata = Billing::where('organization_id', $request->organization_id)->latest()->first();

            $status = '';
            if ($checkdata->next_billingdate <  $today) {

                $status = '1';
            } else {
                $status = '0';
            }


            return response()->json([
                'success' => true,
                'status' =>  $status,
            ]);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'Error fetching billing history',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function movetobilling(Request $request)
    {

        $billing = Billing::find($request->input('id'));
        $move = array(
            'billing_status' => 'New',
            'billing_type' => 'One Time',
            'billing_cycle' => 'Monthly',
            'payment_status' => 'Pending',
            'created_by' => Auth::id(),
        );
        $billing->update($move);
    }

    public function paymentstatus(Request $request)
    {


        $validatedData = $request->validate([
            'id' => 'required|exists:billings,id',
            'payment_status' => 'required|string|max:255',
        ]);

        $billing = Billing::find($validatedData['id']);
        $billing->payment_status = $validatedData['payment_status'];
        $billing->updated_by = Auth::id();
        $billing->save();

        // return response()->json(['success' => true]);
    }

    public function updateStatus(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required|exists:organizations,id',
            'status' => 'required|boolean',
        ]);

        $organization = Organization::find($validatedData['id']);
        $organization->status = $validatedData['status'];
        $organization->save();

        // return response()->json(['success' => true]);
    }
}
