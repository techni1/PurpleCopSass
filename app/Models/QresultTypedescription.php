<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QresultTypedescription extends Model
{
    use HasFactory;

    protected $fillable = [
        'resulttype_id',
        'description',
        'created_by',
        'updated_by',
    ];
}
