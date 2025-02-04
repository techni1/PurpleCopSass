<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAuditCenterRequest;
use App\Http\Resources\AuditCenterResource;
use App\Models\AuditCenter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuditCenterApiController extends Controller
{
    public function get()
    {
        $audits = AuditCenter::with('organizationFramework.framework', 'organizationFramework.user')->get();
        return response()->json(AuditCenterResource::collection($audits));
    }
    public function store(StoreAuditCenterRequest $request)
    {
        // Log::info($request->all());

        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        $result = AuditCenter::create($data);
        if ($result) {
            return response()->json(['success' => true, 'action' => 'created']);
        }
        return response()->json(['success' => false]);
    }
}
