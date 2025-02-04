<?php

namespace App\Http\Controllers;

use App\Http\Resources\FaqcategoryResource;
use App\Models\Faqcategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FaqcategoryController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:faqcategory-create|faqcategory-update|faqcategory-read|faqcategory-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:faqcategory-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:faqcategory-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:faqcategory-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $faqcategory = Faqcategory::get();
        return inertia('Faqcategory/Index', [
            'faqcategory' => FaqcategoryResource::collection($faqcategory),
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
        ]);

        $validatedData['created_by'] = Auth::id();
        $validatedData['updated_by'] = Auth::id();

        Faqcategory::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Faqcategory $faqcategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faqcategory $faqcategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Faqcategory $faqcategory)
    {
        echo '<pre>';
        print_R($faqcategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faqcategory $faqcategory)
    {
        //
    }
}
