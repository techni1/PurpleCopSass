<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Entity extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = [
        'name',
        'legal_name',
        'url',
        'security_officer',
        'address',
        'logo_path',
        'organization_id',
        'created_by',
        'updated_by'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("Entity")
            ->logOnly([
                'name',
                'legal_name',
                'url',
                'securityOfficer.name',
                'address',
                'logo_path',
                'organizations.name',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }

    public static function getEntity($eid)
    {
        $enetity = Entity::where('id', '=', $eid)->first();

        return $enetity;
    }

    public function securityOfficer()
    {
        return $this->belongsTo(User::class, 'security_officer');
    }
    public function organizations()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
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