<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportTickets extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'status', 'ticket_issueby', 'organization_id', 'entity_id', 'priorty', 'department_id'];


    public function replies()
    {
        return $this->hasMany(TicketReply::class);
    }

    public function assignment()
    {
        return $this->hasOne(TicketAssignment::class);
    }
}
