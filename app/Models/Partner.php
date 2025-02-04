<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'pancard',
        'partners_status',
        'legalname',
        'category_id',
        'second_contactno',
        'address',
        'account_number',
        'bank_name',
        'tprm',
        'msme',
        'swiftcode',
        'ibn_number',
        'bank_branch',
        'bank_address',
        'ifsc_code',
        'logo',
        'commission_rate',
        'payment_released',
        'created_by',
        'updated_by',
    ];
}