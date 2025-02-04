<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EditorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $created_at = Carbon::parse($this->created_at)->format('Y-m-d');
        $updated_at = Carbon::parse($this->updated_at)->format('Y-m-d');
        return [
            'id' => $this->id,
            // 'files' => $this->editable,
            'data' => $this->data,
            'version' => $this->version,
            'updated_by' => $this->updatedBy,
            'created_at' => $created_at,
            'updated_at' => $updated_at,
        ];
    }
}
