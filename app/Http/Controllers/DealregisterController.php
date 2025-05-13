<?php

namespace App\Http\Controllers;

use App\Models\Dealregister;
use Illuminate\Http\Request;

class DealregisterController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:dealregister-create|dealregister-update|dealregister-read|dealregister-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:dealregister-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:dealregister-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:dealregister-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $dealregisters = Dealregister::with(['createdBy', 'updatedBy'])->get();

        return inertia('Dealregister/Index', [
            'dealregister' => $dealregisters,
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
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
}
