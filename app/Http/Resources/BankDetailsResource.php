<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BankDetailsResource extends JsonResource
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
            'bank_name' => $this->bank_name,
            'bank_accountname' => $this->bank_accountname,
            'bank_accountno' => $this->bank_accountno,
            'bank_ifsccode' => $this->bank_ifsccode,
            'bank_swiftcode' => $this->bank_swiftcode,
            'notes' => $this->notes,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,

        ];
    }
}
