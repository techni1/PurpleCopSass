<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditCenter extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'organization_framework_id',
        'audit_date',
        'status',
        'audit_team',
        'start_date',
        'end_date',
        'created_by',
        'updated_by',
    ];

    public function organizationFramework()
    {
        return $this->belongsTo(OrganizationFramework::class, "organization_framework_id");
    }
    public function auditTeam()
    {
        return $this->belongsTo(User::class, 'audit_team');
    }
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
