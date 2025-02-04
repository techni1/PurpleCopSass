<?php

namespace App\Http\Controllers;

use App\Http\Resources\OffersResource;
use App\Models\Offers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OffersController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:offers-create|offers-update|offers-read|offers-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:offers-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:offers-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:offers-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offers = Offers::get();
        return inertia("Offers/Index", [
            'offer' => OffersResource::collection($offers),
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|numeric',
            'offer_startdate' => 'required|date',
            'offer_enddate' => 'required|date',
        ]);
        if ($validatedData['offer_enddate'] >= date('Y-m-d')) {
            $status = 1;
        } else {
            $status = 0;
        }

        $validatedData['offer_status'] = $status;
        $validatedData['created_by'] = Auth::id();
        $validatedData['updated_by'] = Auth::id();
        Offers::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Offers $offers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offers $offers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|numeric',
            'offer_startdate' => 'required|date',
            'offer_enddate' => 'required|date',
        ]);

        if ($validatedData['offer_enddate'] >= date('Y-m-d')) {
            $status = 1;
        } else {
            $status = 0;
        }
        $validatedData['offer_status'] = $status;
        $validatedData['updated_by'] = Auth::id();

        $offer = Offers::findOrFail($id);
        $offer->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $offer = Offers::findOrFail($id);
        $offer->delete();
    }
}
