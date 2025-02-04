<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportteamManage extends Model
{
    use HasFactory;

    protected $fillable = [
        'support_user',
        'support_title',
        'attendance',
        'support_status',
        'created_by',
        'updated_by',
    ];
}
