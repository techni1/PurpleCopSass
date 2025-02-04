<?php

namespace App\Http\Resources;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SupportteamManageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $created_at  = Carbon::parse($this->created_at)->format('Y-m-d');
        $update_at   = Carbon::parse($this->updated_at)->format('Y-m-d');
        $assignuser =  User::userName($this->support_user);

        return [
            'id' => $this->id,
            'support_user' => $assignuser->username,
            'support_userid' => $this->support_user,
            'support_title' =>  $this->support_title,
            'attendance' => $this->attendance,
            'support_status' => $this->support_status,
            'department_name' => $assignuser->department_name,
            'created_by' => new UserResource($this->whenLoaded('createdBy')),
            'updated_by' => new UserResource($this->whenLoaded('updatedBy')),
            'create_date' => $created_at,
            'update_date' => $update_at,
        ];
    }
}
