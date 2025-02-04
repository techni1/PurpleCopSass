<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FramworkPrice extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'currency_id',
        'framwork_price',
        'created_by',
        'updated_by',
    ];

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }


    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }


    public static function getFramworkName($fid)
    {

        $fname = FramworkPrice::where('id', '=', $fid)->first();

        return $fname->name;
    }
}
