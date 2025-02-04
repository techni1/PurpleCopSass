<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;
    protected $fillable = [
        'partner_id',
        'sales_amount',
        'commission',
        'sale_date',
        'created_by',
        'updated_by',
    ];
}
