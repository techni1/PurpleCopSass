<?php

namespace App\Http\Controllers;

use App\Models\DocumentAccess;
use App\Http\Requests\StoreDocumentAccessRequest;
use App\Http\Requests\UpdateDocumentAccessRequest;
use App\Http\Resources\DocumentResource;
use App\Models\Document;
use App\Models\Nda;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DocumentAccessController extends Controller
{



    function __construct()
    {
        $this->middleware('permission:documentaccess-create|documentaccess-update|documentaccess-read|documentaccess-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:documentaccess-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:documentaccess-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:documentaccess-delete', ['only' => ['destroy']]);
    }
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
        $user = Auth::user();
        $userList = User::role(['Guest'])->select('id', 'name', 'organization_id')->get();
        $documents = Document::with('category')->where('organization_id', $user->organization_id)->get();
        return inertia('Document/Access', [
            'documents' => DocumentResource::collection($documents),
            'users' => $userList,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentAccessRequest $request)
    {
        $data = $request->validated();
        $users = $data['users'];
        $documents = $data['documents'];
        $created_by = Auth::id();
        $updated_by = Auth::id();


        foreach ($users as $user) {
            foreach ($documents as $document) {
                DocumentAccess::create([
                    'document_id' => $document,
                    'user_id' => $user,
                    'remaining_time' => $data['date'],
                    'created_by' => $created_by,
                    'updated_by' => $updated_by,
                ]);
            }
        }

        return to_route('document.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(DocumentAccess $documentAccess)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DocumentAccess $documentAccess)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentAccessRequest $request, DocumentAccess $documentAccess)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DocumentAccess $documentaccess)
    {
        $documentaccess->delete();
    }
}
