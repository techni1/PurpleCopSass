<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuditCenterResource extends JsonResource
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
            'organizationFramework' => new OrganizationFrameworkResource($this->whenLoaded('organizationFramework')),
            'audit_date' => $this->audit_date,
            'audit_team' => $this->audit_team,
            'status' => $this->status,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $created_at,
            'updated_at' => $updated_at,
        ];
    }
}
