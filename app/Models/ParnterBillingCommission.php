<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParnterBillingCommission extends Model
{
    use HasFactory;

    protected $fillable = [
        'billing_id',
        'partner_id',
        'commission',
        'commission_amount',
        'status',
    ];



    public function billing()
    {

        return $this->belongsTo(Billing::class, 'billing_id');
    }

    public function partner()
    {
        return $this->belongsTo(Partner::class, 'partner_id');
    }
}