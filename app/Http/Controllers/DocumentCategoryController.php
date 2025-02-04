<?php

namespace App\Http\Controllers;

use App\Models\DocumentCategory;
use App\Http\Requests\StoreDocumentCategoryRequest;
use App\Http\Requests\UpdateDocumentCategoryRequest;
use Illuminate\Support\Facades\Auth;

class DocumentCategoryController extends Controller
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
    public function store(StoreDocumentCategoryRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        DocumentCategory::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(DocumentCategory $documentCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DocumentCategory $documentCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentCategoryRequest $request, DocumentCategory $documentCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DocumentCategory $documentCategory)
    {
        //
    }
}
