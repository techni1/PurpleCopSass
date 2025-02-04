<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id',
        'entity_id',
        'package_id',
        'offer_id',
        'invoce_no',
        'invoice_date',
        'invoice_due_date',
        'ponumber',
        'payment_term',
        'item_desc',
        'subtotal',
        'tax',
        'taxable_total',
        'hsn',
        'discount_amt',
        'billingAmount',
        'bank_deatils',
        'term_id',
        'next_billingdate',
        'notes',
        'bank',
        'terms',
        'reason_for_calcellation',
        'reson_notes',
        'billing_type',
        'billing_cycle',
        'payment_status',
        'billing_status',
        'quotation_by',
        'quotation_date',
        'cancel_by',
        'created_by',
        'updated_by'
    ];


    public function organization()
    {

        return $this->belongsTo(Organization::class, 'organization_id');
    }

    public function entity()
    {
        return $this->belongsTo(Entity::class, 'entity_id');
    }

    public function package()
    {
        return $this->belongsTo(Sasspackage::class, 'package_id');
    }

    public function offers()
    {
        return $this->belongsTo(Offers::class, 'offer_id');
    }
}