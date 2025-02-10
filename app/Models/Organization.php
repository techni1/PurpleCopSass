<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;


class Organization extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = [
        'name',
        'legal_name',
        'url',
        'overview',
        'contact_us',
        'founded_in',
        'terms_condition',
        'privacy_policy',
        'security_officer',
        'address',
        'logo_path',
        'created_by',
        'updated_by',
        'iscreate_partner',
        'partner_id',
    ];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("organization")
            ->logOnly([
                'name',
                'legal_name',
                'url',
                'overview',
                'contact_us',
                'founded_in',
                'terms_condition',
                'privacy_policy',
                'securityOfficer.name',
                'address',
                'logo_path',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }



    public static function getOrganizationName($id)
    {

        $organization = Organization::where('id', '=', $id)->first();
        return  $organization->name;
    }

    public static function getOrganizationDetails($id)
    {
        $organization = Organization::where('id', '=', $id)->first();
        return $organization;
    }

    public function securityOfficer()
    {
        return $this->belongsTo(User::class, 'security_officer');
    }
    public function entities()
    {
        return $this->hasMany(Entity::class);
    }
    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function billing()
    {
        return $this->belongsTo(Billing::class, 'organization_id');
    }
}
