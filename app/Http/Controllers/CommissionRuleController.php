<?php

namespace App\Http\Controllers;

use App\Models\CommissionRule;
use Illuminate\Http\Request;

class CommissionRuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    }

    /**
     * Display the specified resource.
     */
    public function show(CommissionRule $commissionRule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CommissionRule $commissionRule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CommissionRule $commissionRule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CommissionRule $commissionRule)
    {
        //
    }

    public function calculate($saleAmount)
    {
        $rule = CommissionRule::where('min_sale', '<=', $saleAmount)
            ->where('max_sale', '>=', $saleAmount)
            ->first();

        return $rule ? ($saleAmount * $rule->commission_percentage / 100) : 0;
    }
}
