<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentableResource extends JsonResource
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
            'details' => $this->when(
                $this->resource instanceof \App\Models\OrganizationPolicy,
                function () {
                    return new OrganizationPolicyResource($this->resource);
                },
                function () {
                    return new OrganizationEvidenceResource($this->resource);
                }
            ),
        ];
    }
}
