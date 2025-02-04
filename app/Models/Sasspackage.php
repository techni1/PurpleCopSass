<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sasspackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'short_desc',
        'payment_type',
        'custom_day',
        'instance_config_details',
        'file_storage',
        'no_of_integration',
        'no_of_user',
        'grace_period_day',
        'assigned_personal_manager',
        'db_backup',
        'notification_email',
        'notification_sms',
        'notification_call',
        'server_type',
        'custom_featured_request',
        'package_amount',
        'created_by',
        'updated_by',
    ];

    public static function sasspackageName($packid)
    {

        $package = Sasspackage::where('id', '=', $packid)->first();

        return $package;
    }
}