<?php

namespace App\Http\Controllers;

use App\Http\Resources\FramworkPriceResource;
use App\Models\Currency;
use App\Models\FramworkPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FramworkPriceController extends Controller
{


    function __construct()
    {
        $this->middleware('permission:framworkprice-create|framworkprice-update|framworkprice-read|framworkprice-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:framworkprice-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:framworkprice-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:framworkprice-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $fraomwork = FramworkPrice::with('currency', 'createdBy', 'updatedBy')->get();

        $framwork = FramworkPrice::get();

        $currency = Currency::get();
        return inertia("FramworkPrice/Index", [
            'framwork' => FramworkPriceResource::collection($framwork),
            'currency' => $currency,
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'items' => 'required|array',
        ]);
        foreach ($validatedData['items'] as $idata) {
            $indata = array(
                'name' => $validatedData['name'],
                'currency_id' =>  $idata['currencyId'],
                'framwork_price' =>  $idata['price'],
                'created_by' => Auth::id(),
                'updated_by' => Auth::id()
            );
            FramworkPrice::create($indata);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(FramworkPrice $framworkPrice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FramworkPrice $framworkPrice)
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
            'framwork_price' => 'required|numeric',
            'currency_id' => 'required',
            'id' => 'required',
        ]);

        $validatedData['updated_by'] = Auth::id();

        $fprice = FramworkPrice::findOrFail($id);


        $fprice->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FramworkPrice $framworkPrice)
    {
        //
    }
}
