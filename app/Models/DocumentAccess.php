<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class DocumentAccess extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = [
        'document_id',
        'user_id',
        'remaining_time',
        'access_status',
        'ip_address',
        'device_name',
        'nda_status',
        'nda_signed_date',
        'created_by',
        'updated_by',
    ];


    /**
     * Customize the log name.
     */
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('Document Access')
            ->logOnly([
                'document.name',
                'user.name',
                'remaining_time',
                'access_status',
                'ip_address',
                'device_name',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }

    public function document()
    {
        return $this->belongsTo(Document::class, 'document_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
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
