<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommissionRule extends Model
{
    use HasFactory;

    protected $fillable = [
        'min_sale',
        'max_sale',
        'commission_percentage',
        'created_by',
        'updated_by',
    ];
}
