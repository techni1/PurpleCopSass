<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class OrganizationEvidence extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = [
        'organization_id',
        'evidence_id',
        'scope',
        'review_date',
        'assignee_id',
        'assignee_status',
        'assignee_due_date',
        'assignee_completion_data',
        'assignee_remark',
        'approver_id',
        'approver_status',
        'approver_completion_data',
        'approver_remark',
        'internal_auditor_id',
        'internal_auditor_status',
        'internal_auditor_completion_data',
        'internal_auditor_remark',
        'external_auditor_id',
        'external_auditor_status',
        'external_auditor_completion_data',
        'external_auditor_remark',
        'created_by',
        'updated_by',
    ];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("Evidence Audit")
            ->logOnly([
                'organization.name',
                'evidence.name',
                'assignee.name',
                'assignee_status',
                'assignee_due_date',
                'assignee_completion_data',
                'assignee_remark',
                'approver.name',
                'approver_status',
                'approver_completion_data',
                'approver_remark',
                'internalAuditor.name',
                'internal_auditor_status',
                'internal_auditor_completion_data',
                'internal_auditor_remark',
                'externalAuditor.name',
                'external_auditor_status',
                'external_auditor_completion_data',
                'external_auditor_remark',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }
    public function organization()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }
    public function evidence()
    {
        return $this->belongsTo(Evidence::class, 'evidence_id');
    }
    public function assignee()
    {
        return $this->belongsTo(User::class, 'assignee_id');
    }
    public function approver()
    {
        return $this->belongsTo(User::class, 'approver_id');
    }
    public function internalAuditor()
    {
        return $this->belongsTo(User::class, 'internal_auditor_id');
    }
    public function externalAuditor()
    {
        return $this->belongsTo(User::class, 'external_auditor_id');
    }
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }
    public function editor()
    {
        return $this->morphMany(Editor::class, 'editable');
    }
    public function comments()
    {
        return $this->morphMany(Finding::class, 'commentable');
    }
}
