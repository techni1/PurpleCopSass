<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];


    public static function findcategoryName($id)
    {

        $category = Category::where('id', '=', $id)->first();
        return  $category->name;
    }
}