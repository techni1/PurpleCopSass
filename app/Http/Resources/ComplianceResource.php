<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ComplianceResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'framework' => new FrameworkResource($this->framework),
            'state' => $this->state,
            'framework_description' => $this->framework_description,
            'visibility' => $this->visibility,
            'documents' => $this->documents
        ];
    }
}
