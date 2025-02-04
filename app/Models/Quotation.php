<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quotation extends Model
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
        'final_amount',
        'bank_deatils',
        'term_id',
        'next_billingdate',
        'notes',
        'bank_deatils',
        'term_id',
        'next_billingdate',
        'notes',
        'reason_for_calcellation',
        'reson_notes',
        'billing_type',
        'billing_cycle',
        'billing_status',
        'cancel_by',
        'created_by',
        'updated_by'
    ];
}
