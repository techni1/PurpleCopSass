<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'symbol',
        'created_by',
        'updated_by',
    ];


    public static function currencySymbol($id)
    {
        $currency = Currency::find($id);
        return $currency->symbol;
    }
}
