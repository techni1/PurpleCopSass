<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submenu extends Model
{
    use HasFactory;

    protected $fillable = [
        'menuid',
        'name',
        'url',
        'submenu_status',

    ];


    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menuid');
    }
}
