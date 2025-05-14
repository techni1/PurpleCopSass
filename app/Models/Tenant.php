<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'database',
        'username',
        'password',
        'host',
        'driver',
        'port',
        'charset',
        'collation',
        'prefix',
        'strict',
        'engine'
    ];
}
