<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faqcategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'catstatus',
        'created_by',
        'updated_by'
    ];
}
