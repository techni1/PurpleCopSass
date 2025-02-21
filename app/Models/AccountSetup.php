<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountSetup extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'folder_name',
        'description',
        'db_name',
        'db_host',
        'db_port',
        'db_username',
        'db_password',
        'db_driver',
        'status',
        'created_by',
        'updated_by',
        'deleted_by',
        'packasge_id',
        'organization_id',
        'entity_id',
        'deletedate'
    ];
}
