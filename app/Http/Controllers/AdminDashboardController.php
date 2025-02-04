<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComplianceResource;
use App\Http\Resources\DocumentAccessResource;
use App\Http\Resources\NdaResource;
use App\Http\Resources\OrganizationEvidenceResource;
use App\Http\Resources\OrganizationPolicyResource;
use App\Http\Resources\OrganizationResource;
use App\Models\Compliance;
use App\Models\CorrectiveAction;
use App\Models\DocumentAccess;
use App\Models\Evidence;
use App\Models\Framework;
use App\Models\Nda;
use App\Models\OrganizationEvidence;
use App\Models\OrganizationFramework;
use App\Models\OrganizationPolicy;
use App\Models\People;
use App\Models\Policy;
use App\Models\Provision;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class AdminDashboardController extends Controller
{
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

    private function employee()
    {

        return '2';
    }


    // Here get all the facts 

    public function countuser()
    {
        $gettotaluser = User::count();

        return $gettotaluser;
    }


    public function framework()
    {

        $array = [];
        return $array;
    }
    public function organizationpolicy()
    {

        $array = [];
        return $array;
    }
    public function organizationevidence()
    {

        $array = [];
        return $array;
    }
    public function people()
    {

        $array = [];
        return $array;
    }
    public function lmsadminaccess()
    {

        $array = [];
        return $array;
    }
    public function purplecop()
    {

        $array = [];
        return $array;
    }
    public function assets()
    {

        $array = [];
        return $array;
    }
    public function riskregister()
    {

        $array = [];
        return $array;
    }
    public function correctiveaction()
    {

        $array = [];
        return $array;
    }
    public function auditcenter()
    {

        $array = [];
        return $array;
    }
    public function reportcomplience()
    {

        $array = [];
        return $array;
    }
    public function assetcategory()
    {

        $array = [];
        return $array;
    }
    public function assetsubcategory()
    {

        $array = [];
        return $array;
    }
    public function assetlocation()
    {

        $array = [];
        return $array;
    }
    public function criticality()
    {

        $array = [];
        return $array;
    }
    public function vendor()
    {

        $array = [];
        return $array;
    }
    public function risk()
    {

        $array = [];
        return $array;
    }
    public function threats()
    {

        $array = [];
        return $array;
    }
    public function riskcategory()
    {

        $array = [];
        return $array;
    }
    public function userlms()
    {

        $array = [];
        return $array;
    }



    /*---------------------BOF Get Policy Due ---------------*/





    public function index()
    {

        $people = $this->employee();
        // dd($people);
        $user = Auth::user();

        $userLogs = Activity::where('causer_id', Auth::id())
            ->latest()
            ->take(5)
            ->get();
        $facts = array(
            'toaluser' => '2',
            'totalframwork' => '2',
            'totalguidlines' => '3',
        );


        // $auditDetails = $this->auditDetails($framworks);


        // dd($correctiveAction);
        switch ($user->roles[0]->name) {
            case 'Super-Admin':
                return inertia(
                    'Dashboard/SuperAdminDashboard',
                    [
                        'fdata' => $facts,
                        'userLogs' => $userLogs,

                    ]
                );

            default:
                return inertia('Dashboard/SuperAdminDashboard');
        }
        // }
    }
    // public function dashboard()
    // {
    //     return inertia('Dashboard/Index');
    // }
}