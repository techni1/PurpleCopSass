<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offers extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'percentage',
        'offer_startdate',
        'offer_enddate',
        'offer_status',
        'created_by',
        'updated_by',
    ];

    public static function offersName($offerid)
    {
        $offer = Offers::where('id', '=', $offerid)->first();
        return $offer;
    }
}
