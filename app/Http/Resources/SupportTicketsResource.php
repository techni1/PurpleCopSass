<?php

namespace App\Http\Resources;

use App\Models\Department;
use App\Models\Organization;
use App\Models\TicketAssignment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SupportTicketsResource extends JsonResource
{
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
            'title' => $this->title,
            'description' => $this->description,
            'status' => $this->status,
            'priorty' => $this->priorty,
            'ticket_issueby' => $this->ticket_issueby,
            'organization_id' => Organization::getOrganizationName($this->organization_id),
            'entity_id' => $this->entity_id,
            'department_id' => $this->department_id,
            'department_name' => Department::departmentName($this->department_id),
            'assignto' => TicketAssignment::getAssignedTo($this->id),
            'create_date' => $created_at,


        ];
    }
}
