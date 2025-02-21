<?php

namespace App\Http\Resources;

use App\Models\Entity;
use App\Models\Organization;
use App\Models\Sasspackage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\LaravelPackageTools\Package;

class AccountSetupResource extends JsonResource
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
            'name' => $this->name,
            'folder_name' => $this->folder_name,
            'description' => $this->description,
            'db_name' => $this->db_name,
            'db_host' => $this->db_host,
            'db_port' => $this->db_port,
            'db_username' => $this->db_username,
            'db_password' => $this->db_password,
            'db_driver' => $this->db_driver,
            'status' => $this->status,
            'created_by' => User::userName($this->created_by),
            'updated_by' => User::userName($this->updated_by),
            'deleted_by' => User::userName($this->deleted_by),
            'packasge_id' => Sasspackage::sasspackageName($this->packasge_id),
            'organization_id' => Organization::getOrganizationName($this->organization_id),
            'organization_name' => Organization::getOrganizationName($this->organization_id),
            'entity_id' => Entity::getEntity($this->entity_id),
            'deletedate' => $this->deletedate

        ];
    }
}
