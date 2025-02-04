<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserApiController extends Controller
{
    public function get()
    {
        $assigneeList = User::role('Assignee')->select('id', 'name', 'organization_id')->get();

        return response()->json($assigneeList);
    }
}
