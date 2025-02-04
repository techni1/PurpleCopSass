<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Criteria extends Model
{
    use HasFactory;
    protected $fillable = [
        'queryfunction_id',
        'name',
        'created_by',
        'updated_by',
    ];
}
