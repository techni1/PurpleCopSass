<?php

namespace App\Http\Resources;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class OrganizationResource extends JsonResource
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
        $addedBy = '';



        // dd($created_at, $updated_at);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'legal_name' => $this->legal_name,
            'url' => $this->url,
            'overview' => $this->overview,
            'contact_us' => $this->contact_us,
            'founded_in' => $this->founded_in,
            'terms_condition' => $this->terms_condition,
            'privacy_policy' => $this->privacy_policy,
            'security_officer' => $this->security_officer,
            'address' => $this->address,
            'logo_path' => $this->logo_path ? Storage::url($this->logo_path) : "",
            'addedby' => $this->partner_id ? $addedBy = User::userName($this->partner_id) : null,
            'createdBy' => new UserResource($this->whenLoaded('createdBy')),
            'updatedBy' => new UserResource($this->whenLoaded('updatedBy')),
            'created_at' => $created_at,
            'updated_at' => $updated_at,
            'status' => $this->status,
        ];
    }
}
