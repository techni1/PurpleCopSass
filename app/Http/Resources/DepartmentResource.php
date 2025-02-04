<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource
{
    public static $wrap = false;
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
            'name' => $this->name,
            'description' => $this->description,
            'createdBy' => new UserResource($this->whenLoaded('createdBy')),
            'updatedBy' => new UserResource($this->whenLoaded('updatedBy')),
            'created_at' => $created_at,
            'updated_at' => $updated_at,
        ];
    }
}
