<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Editor extends Model
{
    use HasFactory, LogsActivity;

    protected $fillable = [
        'data',
        'version',
        'created_by',
        'updated_by',
    ];
    /**
     * The attributes that should be logged.
     *
     * @var array
     */
    protected static $logAttributes = [
        'data',
        'version',
        'created_by',
        'updated_by',
    ];

    /**
     * Get the owning editable model.
     */
    public function editable()
    {
        return $this->morphTo();
    }

    /**
     * Customize the log name.
     */
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('Editor Activity')
            ->logOnly([
                'data',
                'version',
                'createdBy.name',
                'updatedBy.name',
            ])
            ->logOnlyDirty()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ->dontSubmitEmptyLogs();
    }
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    /**
     * Boot method to manually log changes.
     */
    protected static function boot()
    {
        parent::boot();

        static::created(function ($editor) {
            activity('Editor Activity')
                ->performedOn($editor->editable)
                ->withProperties(['attributes' => $editor->getAttributes()])
                ->log("Editor created by {$editor->created_by}");
        });

        static::updated(function ($editor) {
            activity('Editor Activity')
                ->performedOn($editor->editable)
                ->withProperties(['attributes' => $editor->getDirty()])
                ->log("Editor updated by {$editor->updated_by}");
        });

        static::deleted(function ($editor) {
            activity('Editor Activity')
                ->performedOn($editor->editable)
                ->withProperties(['attributes' => $editor->getAttributes()])
                ->log("Editor deleted by {$editor->updated_by}");
        });
    }
}
