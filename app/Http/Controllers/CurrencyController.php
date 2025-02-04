<?php

namespace App\Http\Controllers;

use App\Http\Resources\CurrencyResource;
use App\Models\Currency;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    function __construct()
    {
        $this->middleware('permission:currency-create|currency-update|currency-read|currency-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:currency-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:currency-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:currency-delete', ['only' => ['destroy']]);
    }


    public function index()
    {

        $currency = Currency::get();
        return inertia("Currency/Index", [
            'currency' => CurrencyResource::collection($currency),
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
            'symbol' => 'required',
        ]);

        $validatedData['created_by'] = Auth::id();
        $validatedData['updated_by'] = Auth::id();

        Currency::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Currency $currency)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Currency $currency)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Currency $currency)
    {

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'symbol' => 'required',
        ]);

        $validatedData['updated_by'] = Auth::id();

        $currency->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Currency $currency)
    {
        //
    }
}
