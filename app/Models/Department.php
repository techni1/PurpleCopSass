<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Department extends Model
{
    use HasFactory, LogsActivity;
    protected $fillable = [
        'name',
        'description',
        'created_by',
        'updated_by',
    ];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName("Department")
            ->logOnly([
                'name',
                'description',
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

    public static function departmentName($deptid)
    {

        $dept = Department::find($deptid);

        return $dept->name;
    }
}
