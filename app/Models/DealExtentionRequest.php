<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class DealExtentionRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'dealregister_id',
        'partner_id',
        'extension_date',
        'extension_reason',
        'approved_expirydate',
        'status',
        'created_by',
        'updated_by',
    ];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("Deal extension Request")
            ->logOnly([
                'extension_reason',
                'extension_date',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }


    public function dealregister()
    {
        return $this->belongsTo(Dealregister::class, 'dealregister_id');
    }
    public function partner()
    {
        return $this->belongsTo(User::class, 'partner_id');
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