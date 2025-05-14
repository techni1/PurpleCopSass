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
        'legalname',
        'categoryid',
        'second_contactno',
        'partner_address',
        'logo',
        'bank_accountnumber',
        'bank_name',
        'bank_branch',
        'bank_ibn',
        'bank_ifsce',
        'bank_swiftcode',
        'bank_address',
        'tprm',
        'msme',
        'payment_realsed',
        'partner_status',
        'commission_rate',
        'created_by',
        'updated_by',
    ];
}
