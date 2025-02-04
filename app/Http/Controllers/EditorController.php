<?php

namespace App\Http\Controllers;

use App\Models\Editor;
use App\Http\Requests\StoreEditorRequest;
use App\Http\Requests\UpdateEditorRequest;
use App\Models\OrganizationEvidence;
use App\Models\OrganizationPolicy;
use Illuminate\Support\Facades\Auth;

class EditorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($type)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($type)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEditorRequest $request, $type)
    {
        $data = $request->validated();
        if ($type == 'policy') {
            $organization = OrganizationPolicy::find($data['type_id']);
        }
        if ($type == 'evidence') {
            $organization = OrganizationEvidence::find($data['type_id']);
        }
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $editor = new Editor($data);
        $organization->editor()->save($editor);
        $organization->update([
            'assignee_status' => 'complete'
        ]);
        if ($request->user == "Admin") {
            $organization->update(['assignee_id' => Auth::id()]);
        }
        // return back()->with('success', "Document Saved");
    }

    /**
     * Display the specified resource.
     */
    public function show(Editor $editor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Editor $editor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEditorRequest $request, $type, Editor $editor)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();

        // Find the associated model based on the type
        $associatedModel = null;

        if ($type == 'policy') {
            $associatedModel = OrganizationPolicy::find($request->type_id);
        } elseif ($type == 'evidence') {
            $associatedModel = OrganizationEvidence::find($request->type_id);
        }

        if ($associatedModel) {
            // Update the editor data
            $editor->update($data);

            // Optionally, you can also update any related data in the associated model if needed
            // e.g., $associatedModel->update([...]);

            return back()->with('success', "Document Updated");
        }

        return back()->withErrors('Associated model not found.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($type, Editor $editor)
    {
        $requirement = $editor->editable;
        $result = $editor->delete();
        if ($result) {
            $requirement->update(['assignee_status' => 'pending']);
        }
        return back()->with('success', "File Deleted");
    }
}
