<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SecurityControl extends Model
{
    use HasFactory;

    protected $fillable = [
        'controls',
        'created_by',
        'updated_by',
    ];
}
