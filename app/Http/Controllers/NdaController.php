<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNdaRequest;
use App\Http\Requests\UpdateNdaRequest;
use App\Http\Resources\NdaResource;
use App\Models\Nda;
use App\Models\User;
use App\Notifications\GenericNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class NdaController extends Controller
{

    private function getAdminUser($organizationId)
    {
        return User::with('roles')
            ->where('organization_id', $organizationId)
            ->whereHas('roles', function ($query) {
                $query->where('name', 'Admin');
            })
            ->first();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user = Nda::all();
        return inertia("NDA/Index", [
            'ndaUsers' => NdaResource::collection($user),
        ]);
    }

    public function sign()
    {
        $nda = Nda::where('user_id', Auth::id())->firstOrFail();
        return inertia('Guest/SignNda', [
            'userNda' => $nda,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("NDA/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNdaRequest $request)
    {
        // Retrieve the validated data
        $data = $request->validated();

        // Prepare the `user_meta_data` field as JSON
        $userMetaData = [
            'address' => $data['user_meta_data']['address'],
            'state' => $data['user_meta_data']['state'],
            'country' => $data['user_meta_data']['country'],
        ];


        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'added_by' => Auth::id(),
            'updated_by' => Auth::id(),
        ]);

        if ($user) {
            $user->assignRole($data['user_role']);
            $userId = $user->id;
            Nda::create([
                'user_id' => $userId,
                'organization' => $data['organization'],
                'user_meta_data' => json_encode($userMetaData),
                'created_by' => Auth::id(),
                'updated_by' => Auth::id(),
            ]);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Nda $nda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Nda $nda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  Nda $nda)
    {
        $date = Carbon::now()->toDateTimeString();
        $updated = $nda->update([
            'nda_status' => 'signed',
            'nda_signed_date' => $date,
            'updated_by' => Auth::id(),
        ]);
        if ($updated) {
            $admin = $this->getAdminUser($nda->createdBy->organization_id);
            Notification::send([$admin], new GenericNotification([
                'subject' => 'NDA Notification',
                'type' => 'NDA',
                'name' => $nda->user->name,
                'message' => 'Nda Has been signed',
                'url' => url("/nda"),
            ]));
        }
        return redirect('/');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Nda $nda) {}
}
