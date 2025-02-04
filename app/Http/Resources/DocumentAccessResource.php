<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentAccessResource extends JsonResource
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
            'document' => $this->document,
            'user_id' => $this->whenLoaded('user_id'),
            'user' => $this->whenLoaded('user', function () {
                $user = [

                    'id' => $this->user->id,
                    'name' => $this->user->name,
                    'email' => $this->user->email,
                ];
                return  $user;
            }),
            'remaining_time' => $this->remaining_time,
            'access_status' => $this->access_status,
            'ip_address' => $this->ip_address,
            'device_name' => $this->device_name,
        ];
    }
}
