<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerDocuments extends Model
{
    use HasFactory;
    protected $fillable = [
        'partnerid',
        'document_name',
        'document',
        'created_by',
        'updated_by',
    ];
}