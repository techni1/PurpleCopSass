<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faqtype extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'typestatus',
        'created_by',
        'updated_by'
    ];
}
