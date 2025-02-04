<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Document extends Model
{
    use HasFactory, LogsActivity, HasSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'document_path',
        'name',
        'is_deleted',
        'slug',
        'organization_id',
        'document_category_id',
        'global_access',
        'created_by',
        'updated_by',
    ];
    // This tells Laravel to use the slug for route binding instead of the ID
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * The attributes that should be logged.
     *
     * @var array
     */
    protected static $logAttributes = [
        'document_path',
        'name',
        'global_access',
        'document_category_id',
        'is_deleted',
        'organization.name',
        'slug',
        'created_by',
        'updated_by',
    ];

    /**
     * Get the owning documentable model.
     */
    public function documentable()
    {
        return $this->morphTo();
    }

    /**
     * Customize the log name.
     */
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('Document Activity')
            ->logOnly([
                'document_path',
                'name',
                'is_deleted',
                'global_access',
                'category.name',
                'slug',
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
    public function category()
    {
        return $this->belongsTo(DocumentCategory::class, 'document_category_id');
    }
    public function organization()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }
    /**
     * Boot method to manually log changes.
     */
    // protected static function boot()
    // {
    //     parent::boot();

    //     static::created(function ($document) {
    //         activity('Document Activity')
    //             ->performedOn($document->documentable)
    //             ->withProperties(['attributes' => $document->getAttributes()])
    //             ->log("Document created at {$document->document_path}");
    //     });

    //     static::updated(function ($document) {
    //         activity('Document Activity')
    //             ->performedOn($document->documentable)
    //             ->withProperties(['attributes' => $document->getDirty()])
    //             ->log("Document updated at {$document->document_path}");
    //     });

    //     static::deleted(function ($document) {
    //         activity('Document Activity')
    //             ->performedOn($document->documentable)
    //             ->withProperties(['attributes' => $document->getAttributes()])
    //             ->log("Document deleted from {$document->document_path}");
    //     });
    // }
}
