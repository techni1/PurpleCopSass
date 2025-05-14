<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Dealregister extends Model
{
    use HasFactory;
    protected $fillable = [
        'partner_id',
        'deal_name',
        'contact_person',
        'contact_number',
        'contact_email',
        'expiry_date',
        'extension_date',
        'deal_value',
        'deal_status',
        'deal_description',
        'deal_source',
        'created_by',
        'updated_by',
    ];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("Deal Register")
            ->logOnly([
                'deal_name',
                'deal_description',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }
    // public function department()
    // {
    //     return $this->belongsTo(User::class, 'department_id');
    // }
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
