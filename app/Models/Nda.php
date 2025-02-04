<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Nda extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = [
        'user_id',
        'organization',
        'category',
        'user_meta_data',
        'nda_status',
        'nda_signed_date',
        'nda_end_date',
        'created_by',
        'updated_by'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("NDA")
            ->logOnly([
                'user.name',
                'organization',
                'category',
                'user_meta_data',
                'nda_status',
                'nda_signed_date',
                'nda_end_date',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
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
