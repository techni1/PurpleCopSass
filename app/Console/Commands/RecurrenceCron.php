<?php

namespace App\Console\Commands;

use App\Models\OrganizationEvidence;
use App\Models\OrganizationPolicy;
use Carbon\Carbon;
use Illuminate\Console\Command;

class RecurrenceCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'recurrence:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This cron job for get records from policy and evidence data based on  monthly|quarterly|yearly ';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dashboard = array();
        //
        $dateS = Carbon::now()->startOfMonth()->subMonth(3);
        $dateE = Carbon::now()->startOfMonth();


        // Next 10 Days records 
        $today = Carbon::now();
        $day10 = Carbon::now()->addDays(10);
        $day30 = Carbon::now()->addDays(30);

        // Get records from policy by due date next 3 months 
        $policyData = OrganizationPolicy::with('policy')->whereBetween('organization_policies.due_date', [$dateS, $dateE])->get();
        foreach ($policyData as $pdata) {
            // If records Due date next 10 Days then highlight in Red
            if ($pdata->due_date ==  $today) {

                $dashboard['policy_today'][] =  array(
                    'Policyname' => $pdata->policy->name,
                    'policy_duedate' => $pdata->due_date,
                );
            }
            // If records Due Date next 30 Days then Color Purpule
            if ($pdata->due_date < $day10 && $pdata->due_date > $today) {
                $dashboard['policy_10days'][] = array(
                    'Policyname' => $pdata->policy->name,
                    'policy_duedate' => $pdata->due_date,
                );
            }
            // else font color black 

            if ($pdata->due_date < $day30 && $pdata->due_date > $today) {
                $dashboard['policy_30days'][] = array(
                    'Policyname' => $pdata->policy->name,
                    'policy_duedate' => $pdata->due_date,
                );
            }
        }
        // Get records from evidence by due date next 3 month

        $evidenceData = OrganizationEvidence::with('evidence')->whereBetween('organization_evidence.due_date', [$dateS, $dateE])->get();
        foreach ($evidenceData as $edata) {
            // If records Due date next 10 Days then highlight in Red
            if ($edata->due_date ==  $today) {

                $dashboard['evidence_today'][] =  array(
                    'evidencename' => $edata->policy->name,
                    'evidence_duedate' => $edata->due_date,
                );
            }
            // If records Due Date next 30 Days then Color Purpule
            if ($edata->due_date < $day10 && $edata->due_date > $today) {
                $dashboard['evidence_10days'][] = array(
                    'Policyname' => $edata->policy->name,
                    'policy_duedate' => $edata->due_date,
                );
            }
            // else font color black 

            if ($edata->due_date < $day30 && $edata->due_date > $today) {
                $dashboard['evidence_30days'][] = array(
                    'Policyname' => $edata->policy->name,
                    'policy_duedate' => $edata->due_date,
                );
            }
        }

        return $dashboard;
    }
}
