<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;
use App\Models\ParnterBillingCommission;

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



    public function userlms()
    {

        $array = [];
        return $array;
    }



    /*---------------------BOF Get Policy Due ---------------*/


    /*---------------------BOF Partner Billing Commission ---------------*/


    public function partnerBilling()
    {
        $partnerBillingCommission = ParnterBillingCommission::with('billing', 'partner')->get();
        return inertia('PartnerBillingCommission/Index', [
            'partnerBillingCommission' => $partnerBillingCommission
        ]);
    }


    /*---------------------EOF Partner Billing Commission ---------------*/






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


        //$partner 

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

            case 'Partner':
                return inertia(
                    'Dashboard/PartnerDashboard',
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