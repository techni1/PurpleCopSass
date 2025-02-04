<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Entity;
use App\Models\User;
use Illuminate\Http\Request;

class OrganizationApiController extends Controller
{
    public function getentity($id)
    {

        $entities = Entity::where('organization_id', $id)->get();
        return response()->json($entities);
    }

    public function getteam($id)
    {
        $team = User::where('organization_id', $id)->with('designation', 'department')->get();
        return response()->json(UserResource::collection($team));
    }
}
