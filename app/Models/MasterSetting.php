<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MasterSetting extends Model
{
    use HasFactory;


    protected $fillable = [
        'master_key',
        'master_value',
        'created_by',
        'updated_by',
    ];
}
