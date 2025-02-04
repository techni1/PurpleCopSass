<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'documentable_id' => $this->documentable_id,
            'documentable_type' => $this->documentable_type,
            // 'documentable' => $this->documentable,
            'document_path' => $this->document_path,
            'slug' => $this->slug,
            'is_deleted' => $this->is_deleted,
            'global_access' => $this->global_access,
            'created_by' => $this->created_by,
            'createdBy' => $this->whenLoaded('createdBy', function () {
                return $this->createdBy->name;
            }),
            'category' => $this->whenLoaded('category', function () {
                return $this->category->name;
            }),
            'created_at' => $created_at,
            "organization_id" => $this->organization_id,
        ];
    }
}
