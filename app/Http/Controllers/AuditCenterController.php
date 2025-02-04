<?php

namespace App\Http\Controllers;

use App\Models\AuditCenter;
use App\Http\Requests\StoreAuditCenterRequest;
use App\Http\Requests\UpdateAuditCenterRequest;
use App\Http\Resources\AuditCenterResource;
use App\Http\Resources\FindingResource;
use App\Http\Resources\OrganizationEvidenceResource;
use App\Http\Resources\OrganizationPolicyResource;
use App\Models\Finding;
use App\Models\OrganizationEvidence;
use App\Models\OrganizationFramework;
use App\Models\OrganizationPolicy;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuditCenterController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:auditcenter-create|auditcenter-update|auditcenter-read|auditcenter-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:auditcenter-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:auditcenter-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:auditcenter-delete', ['only' => ['destroy']]);
    }


    public function status($allPolicies)
    {
        foreach ($allPolicies as $policy) {
            if (
                $policy->assignee_status === "complete" &&
                $policy->approver_status === "approved"
            ) {
                if ($policy->internal_auditor_status === "approved") {
                    if ($policy->external_auditor_status === 'approved') {
                        $policy->status = 'audited';
                    } elseif ($policy->external_auditor_status === 'deny') {
                        $policy->status = 'external_need_review';
                    } else {
                        $policy->status = "published";
                    }
                } elseif ($policy->internal_auditor_status === "deny") {
                    $policy->status = "need_review";
                } else {
                    $policy->status = "approved";
                }
            } elseif ($policy->assignee_status === "complete") {
                if ($policy->approver_status === "pending") {
                    $policy->status = "submitted";
                } elseif (
                    $policy->approver_status === "deny" ||
                    $policy->internal_auditor_status === "deny"
                ) {
                    $policy->status = "need_review";
                }
            } elseif (
                $policy->assignee_status === "pending" &&
                $policy->approver_status === "pending"
            ) {
                $policy->status = "not_uploaded";
            } else {
                $policy->status = "null";
            }
        }

        return $allPolicies;
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userframework = OrganizationFramework::with('framework:id,name')->get();
        $audits = AuditCenter::all();
        return inertia('AuditCenter/Index', [
            'userframework' => $userframework,
            'audits' => AuditCenterResource::collection($audits),

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
    public function store(StoreAuditCenterRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        AuditCenter::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(AuditCenter $auditcenter)
    {
        // dd($auditcenter);
        $user = Auth::user();
        $assignees = User::where('organization_id', $user->organization_id)
            ->role('assignee')
            ->get(['id', 'name']);
        $policies = OrganizationPolicy::with(
            'organization',
            'policy',
            'assignee',
            'approver',
            // 'internalAuditor',
            // 'externalAuditor',
        )->where('organization_id', $user->organization_id)->get();
        $updatedPolicies = $this->status($policies);
        $findings = Finding::where('audit_id', $auditcenter->id)->with(
            'commentable',
            'auditor',
            'correctiveAction'
        )->get();
        $evidences = OrganizationEvidence::with(
            'organization',
            'evidence',
            'assignee',
            'approver',
            // 'internalAuditor',
            // 'externalAuditor',
        )->where('organization_id', $user->organization_id)->get();
        $updatedEvidences = $this->status($evidences);
        $auditcenter->load('organizationFramework.framework', 'organizationFramework.user');
        return inertia('AuditCenter/Show', [
            'audits' => new AuditCenterResource($auditcenter),
            'assignees' => $assignees,
            'policies' => OrganizationPolicyResource::collection($updatedPolicies),
            'evidences' => OrganizationEvidenceResource::collection($updatedEvidences),
            'findings' => FindingResource::collection($findings),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AuditCenter $auditCenter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAuditCenterRequest $request, AuditCenter $auditCenter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AuditCenter $auditCenter)
    {
        //
    }
}
