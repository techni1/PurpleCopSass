<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Finding extends Model
{
    use HasFactory, LogsActivity;
    protected $fillable = [
        'audit_id',
        'auditor_id',
        'comment',
        'nature_of_finding',
        'description',
        'department_id',
        'attachment_path',
        'status',
        'remark',
        'created_by',
        'updated_by',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("findings")
            ->logOnly([
                'audit.name',
                'auditor.name',
                'comment',
                'nature_of_finding',
                'description',
                'department.name',
                'attachment_path',
                'status',
                'remark',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }

    public function commentable()
    {
        return $this->morphTo();
    }
    public function auditor()
    {
        return $this->belongsTo(User::class, 'auditor_id');
    }
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function audit()
    {
        return $this->belongsTo(AuditCenter::class, 'audit_id');
    }
    public function correctiveAction()
    {
        return $this->morphMany(CorrectiveAction::class, 'source');
    }
}
