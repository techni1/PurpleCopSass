<?php

namespace App\Http\Resources;

use App\Models\Currency;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class FramworkPriceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,
            'currency_id' => $this->currency_id,
            'price' => $this->framwork_price,
            'currency' => Currency::currencySymbol($this->currency_id),
            'name' => $this->name,
        ];
    }
}
