<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'bank_name',
        'bank_accountname',
        'bank_accountno',
        'bank_ifsccode',
        'bank_swiftcode',
        'notes',
        'created_by',
        'updated_by'
    ];

    public static function bankDetails($bankid)
    {
        $bank = BankDetails::where('id', '=', $bankid)->first();
        return $bank;
    }
}
