<?php

namespace App\Exports;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ReportEvidanceExport implements FromQuery, WithHeadings, WithTitle
{
    use Exportable;

    protected $framworkid;
    protected $status;

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
            ->leftJoin('control_code_evidence', 'control_code_evidence.control_code_id', '=', 'provision_control_code.control_code_id')
            ->leftJoin('evidence', 'evidence.id', '=', 'control_code_evidence.evidence_id')
            ->leftJoin('organization_evidence', 'organization_evidence.evidence_id', '=', 'control_code_evidence.evidence_id')
            ->leftJoin('users as assigneeuser', 'assigneeuser.id', '=', 'organization_evidence.assignee_id')
            ->leftJoin('users as approvaluser', 'approvaluser.id', '=', 'organization_evidence.approver_id')
            ->select(
                'frameworks.name as Framework',
                'evidence.name as Activity',
                'organization_evidence.recurrence as Recurrence',
                'assigneeuser.name',
                'organization_evidence.assignee_status as Assignee Status',
                'organization_evidence.assignee_due_date as Assignee DueDate',
                'organization_evidence.approver_status as Approval Status',
                'approvaluser.name',
                'organization_evidence.approver_completion_data as Approval DueDate',
                'organization_evidence.external_auditor_status as External Audit Status'
            )
            ->where('frameworks.id', '=', $this->framworkid)
            ->where('organization_evidence.scope', '=', 'in');

        // Apply status-based filtering
        if ($this->status == 'pending') {
            $data->where(function ($query) {
                $query->where('organization_evidence.assignee_status', '=', 'pending');
            });
        } elseif ($this->status == 'approved') {
            $data->where('organization_evidence.approver_status', '=', 'approved');
        } elseif ($this->status == 'published') {
            $data->where('organization_evidence.external_auditor_status', '=', 'approved');
        }

        return $data->orderBy('evidence.id', 'asc');
    }

    public function headings(): array
    {
        return [
            "Framework",
            "Activity",
            "Recurrence",
            "Assignee Name",
            "Assignee Status",
            "Assignee DueDate",
            "Approval Name",
            "Approval Status",
            "Approval DueDate",
            "External Audit Status"
        ];
    }

    public function title(): string
    {
        return 'Evidance';
    }
}
