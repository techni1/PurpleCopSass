<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        // $role = '';
        // if (!empty($this->getRoleNames())) {

        //     foreach ($this->getRoleNames() as $v) {
        //         $role =  $v;
        //     }
        // }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'contact' => $this->user_contact_no,
            'designation_id' => $this->designation_id,
            'department_id' => $this->department_id,
            'organization_id' => $this->organization_id,
            'designation' => new DesignationResource($this->whenLoaded('designation')),
            'department' => new DepartmentResource($this->whenLoaded('department')),
            'organization' => new OrganizationResource($this->whenLoaded('organization')),
            'role' => $this->roles->pluck('name'), // Assuming roles are a collection
            'profile_pic' => $this->user_profile_pic
        ];
    }
}
