<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
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
            'type' => $this->data['type'],
            'name' => $this->data['name'],
            'message' => $this->data['message'],
            'url' => $this->data['url'],
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
            'read_at' => $this->read_at,
        ];
    }
}
