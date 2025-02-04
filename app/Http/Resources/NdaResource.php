<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NdaResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $nda_signed_date = null;
        if ($this->nda_signed_date) {
            $nda_signed_date = Carbon::parse($this->nda_signed_date)->format('y-m-d');
        }
        $nda_end_date = null;
        if ($this->nda_end_date) {
            $nda_end_date = Carbon::parse($this->nda_end_date)->format('y-m-d');
        }
        $created_at = Carbon::parse($this->created_at)->format('Y-m-d');

        return [
            'id' => $this->id,
            'user' => new UserResource($this->user),
            'organization' => $this->organization,
            'user_meta_data' => $this->user_meta_data,
            'category' => $this->category,
            'nda_status' => $this->nda_status,
            'nda_signed_date' => $nda_signed_date,
            'nda_end_date' => $nda_end_date,
            'created_at' => $created_at,

        ];
    }
}
