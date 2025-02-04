<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faqsubcategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'faqcategory_id',
        'name',
        'subcatstatus',
        'created_by',
        'updated_by'
    ];
}
