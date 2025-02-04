<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationFramework extends Model
{
    use HasFactory;
    protected $fillable = [
        'isblocked',
        'organization_id',
        'framework_id',
        'user_id',
        'updated_by',
    ];

    public function organization()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }
    public function framework()
    {
        return $this->belongsTo(Framework::class, 'framework_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
