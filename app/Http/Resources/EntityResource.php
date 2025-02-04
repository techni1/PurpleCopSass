<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class EntityResource extends JsonResource
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
            'legal_name' => $this->legal_name,
            'url' => $this->url,
            'security_officer' => $this->security_officer,
            'address' => $this->address,
            'logo_path' => $this->logo_path ? Storage::url($this->logo_path) : "",
            'organization' => new OrganizationResource($this->organizations),
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
            'created_at' => $created_at,
            'updated_at' => $updated_at,
        ];
    }
}
