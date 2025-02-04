<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthUserController extends Controller
{
    public function get()
    {
        $user = User::with('roles')->find(Auth::id());
        // $user = Auth::all();
        // dd(new UserResource($user));

        return response()->json(new UserResource($user));
    }
}
