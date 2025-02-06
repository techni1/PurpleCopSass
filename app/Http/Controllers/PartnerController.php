<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePartnerRequest;
use App\Http\Requests\UpdatePartnerRequest;
use App\Http\Resources\PartnerResource;
use App\Models\Partner;
use App\Models\PartnerCategory;
use App\Models\PartnerDocuments;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PartnerController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:partner-create|partner-update|partner-read|partner-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:partner-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:partner-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:partner-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $partner = Partner::all();

        $partner_category = PartnerCategory::all();


        return inertia("Partner/Index", [
            'partner' => PartnerResource::collection($partner),
            'partnerCategory' => $partner_category,
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
    public function store(StorePartnerRequest $request)
    {
        $data = $request->validated();
        $logo = $request->file('logo') ?? null;
        if ($logo) {
            $data['logo'] =  $logo->store('partner/logo/' . Str::random(), 'public');
        }


        $data['partner_address'] = $request->partner_address ? $request->partner_address : '';
        $data['categoryid'] = $request->categoryid ? $request->categoryid : '';
        $data['bank_accountnumber'] = $request->bank_accountnumber ? $request->bank_accountnumber : '';
        $data['bank_name'] = $request->bank_name ? $request->bank_name : '';
        $data['bank_branch'] = $request->bank_branch ? $request->bank_branch : '';
        $data['bank_ibn'] = $request->bank_ibn ? $request->bank_ibn : '';
        $data['bank_ifsce'] = $request->bank_ifsce ? $request->bank_ifsce : '';
        $data['bank_swiftcode'] = $request->bank_swiftcode ? $request->bank_swiftcode : '';
        $data['bank_address'] = $request->bank_address ? $request->bank_address : '';
        $data['tprm'] = $request->tprm ? $request->tprm : '';
        $data['msme'] = $request->msme ? $request->msme : '';
        $data['payment_realsed'] = $request->payment_realsed ? $request->payment_realsed : '';
        $data['partner_status'] = $request->partners_status ? $request->partners_status : '';
        $data['commission_rate'] = $request->commission_rate ? $request->commission_rate : '';
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();


        $partnerAdd = Partner::create($data);


        $indata = array();
        // add document in parnter id 

        $gst_vat_document = $request->file('gst_vat_document') ?? null;

        if ($gst_vat_document) {

            $indata[1]['document_name'] = 'gst_vat_document';
            $indata[1]['doucment'] =  $gst_vat_document->store('partner/vat/' . Str::random(), 'public');
        }

        $cancel_cheque =  $request->file('cancel_cheque') ?? null;
        if ($cancel_cheque) {
            $indata[2]['document_name'] = 'cancel_cheque';
            $indata[2]['document'] = $cancel_cheque->store('partner/cheque/' . Str::random(), 'public');
        }

        $coi_document =  $request->file('coi_document') ?? null;
        if ($coi_document) {
            $indata[3]['document_name'] = 'coi_document';
            $indata[3]['document'] = $coi_document->store('partner/coi/' . Str::random(), 'public');
        }

        $pancard_document =  $request->file('pancard_document') ?? null;
        if ($pancard_document) {
            $indata[4]['document_name'] = 'pancard_document';
            $indata[4]['document'] = $pancard_document->store('partner/pancar/' . Str::random(), 'public');
        }

        foreach ($indata as $datain) {
            if (!empty($datain['doucment'])) {
                $in['partnerid'] = $partnerAdd->id;
                $in['document_name'] = $datain['document_name'];
                $in['document'] = $datain['doucment'];

                PartnerDocuments::create($in);
            }
            //  dd($datain);
        }

        // ALso Add on User table 

        $userData['name'] = $data['legalname'];
        $userData['email'] = $data['email'];

        $profileImg = $request->file('logo') ?? null;
        if ($profileImg) {
            $userData['user_profile_pic'] = $profileImg->store('user/' . Str::random(), 'public');
        }
        $userData['password'] = bcrypt($data['phone']);
        $user = User::create($userData);

        $user->assignRole('Partner');
        // Send email 

    }

    /**
     * Display the specified resource.
     */
    public function show(Partner $partner)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Partner $partner) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePartnerRequest $request, Partner $partner)
    {
        //
        $updated = $request->validated();

        $updated['address'] = $request->address ? $request->address : '';
        $updated['updated_by'] = Auth::id();
        $partner->update($updated);

        //  return to_route('organization.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Partner $partner)
    {
        //
    }
}