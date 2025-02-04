<?php

namespace App\Exports;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;


use Maatwebsite\Excel\Concerns\WithTitle;


use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ReportPolicyExport implements FromQuery, WithHeadings, WithTitle
{
    use Exportable;

    public function __construct($framworkid, $status)
    {


        $this->framworkid = $framworkid;
        $this->status = $status;
    }

    public function query()
    {
        $data = DB::table('frameworks')
            ->leftJoin('framework_provisions', 'framework_provisions.framework_id', '=', 'frameworks.id')
            ->leftJoin('provision_control_code', 'provision_control_code.provision_id', '=', 'framework_provisions.provision_id')
            ->leftJoin('control_code_policies', 'control_code_policies.control_code_id', '=', 'provision_control_code.control_code_id')
            ->leftJoin('policies', 'policies.id', '=', 'control_code_policies.policy_id')
            ->leftJoin('organization_policies', 'organization_policies.policy_id', '=', 'control_code_policies.policy_id')
            ->leftJoin('users as assigneeuser', 'assigneeuser.id', '=', 'organization_evidence.assignee_id')
            ->leftJoin('users as approvaluser', 'approvaluser.id', '=', 'organization_evidence.approver_id')

            ->select(
                'frameworks.name as Framework',
                'policies.name as Activity',
                'organization_policies.recurrence as Recurrence',
                'assigneeuser.name',
                'organization_policies.assignee_status as Assignee Status',
                'organization_policies.assignee_due_date as Assignee DueDate',
                'organization_policies.approver_status as Approval Status',
                'organization_policies.approver_completion_data as Approval DueDate',
                'organization_policies.external_auditor_status as External Audit Status'
            )
            ->where('frameworks.id', '=', $this->framworkid)
            ->where('organization_policies.scope', '=', 'in');

        // Apply status-based filtering
        if ($this->status == 'pending') {
            $data->where(function ($query) {
                $query->where('organization_policies.assignee_status', '=', 'pending');
            });
        } elseif ($this->status == 'approved') {
            $data->where('organization_policies.approver_status', '=', 'approved');
        } elseif ($this->status == 'published') {
            $data->where('organization_policies.external_auditor_status', '=', 'approved');
        }

        return $data->orderBy('policies.id', 'asc');
    }

    public function headings(): array
    {
        return [
            "Framework",
            "Activity",
            "Recurrence",
            "Assignee Status",
            "Assignee DueDate",
            "Approval Status",
            "Approval DueDate",
            "External Audit Status"
        ];
    }

    public function title(): string
    {
        return 'Policy';
    }
}
