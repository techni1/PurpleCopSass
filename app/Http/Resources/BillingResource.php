<?php

namespace App\Http\Resources;

use App\Models\BankDetails;
use App\Models\Entity;
use App\Models\FramworkPrice;
use App\Models\Offers;
use App\Models\Organization;
use App\Models\Sasspackage;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\LaravelPackageTools\Package;

class BillingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $billingJson = json_decode($this->item_desc);

        $itemdata = array();

        foreach ($billingJson as $billingItems) {




            $itemdata[] = array(
                'framwork' => FramworkPrice::getFramworkName(1),
                'unitPrice' => $billingItems->unitPrice,
                'qty' => $billingItems->qty,
                'hsn' => $billingItems->hsn,
                'singleAmt' => $billingItems->singleAmt,

            );
        }
        $itemdesc = json_encode($itemdata);


        return [
            'id' => $this->id,
            'organization_id' => Organization::getOrganizationDetails($this->organization_id),
            'entity_id' => Entity::getEntity($this->entity_id),
            'package_id' => Sasspackage::sasspackageName($this->package_id),
            'offer_id' => Offers::offersName($this->offer_id),
            'invoce_no' => $this->invoce_no,
            'invoice_date' => $this->invoice_date,
            'invoice_due_date' => $this->invoice_due_date,
            'ponumber' => $this->ponumber,
            'payment_term' => $this->payment_term,
            'item_desc' => $itemdata,
            'subtotal' => $this->subtotal,
            'tax' => $this->tax,
            'taxable_total' => $this->taxable_total,
            'hsn' => $this->hsn,
            'discount_amt' => $this->discount_amt,
            'billingAmount' => $this->billingAmount,
            'bank_deatils' => BankDetails::bankDetails($this->bank_deatils),
            'term_id' => $this->term_id,
            'notes' => $this->notes,
            'bank' => $this->bank,
            'terms' => $this->terms,
            'reason_for_calcellation' => $this->reason_for_calcellation,
            'reson_notes' => $this->reson_notes,
            'next_billingdate' => $this->next_billingdate,
            'billing_status' => $this->billing_status,
            'payment_status' => $this->payment_status,
            'cancel_by' => $this->cancel_by,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
