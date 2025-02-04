<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Query extends Model
{
    use HasFactory;


    protected $fillable = [
        'qfunction_id',
        'qcriteria_id',
        'qfocusarea_id',
        'question',
        'score',
        'securotycontrol_id',
        'attachment',
        'priority',
        'critical_control',
        'nis2_requirement',
        'created_by',
        'updated_by',
    ];
}