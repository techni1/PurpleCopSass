<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketAssignment extends Model
{
    use HasFactory;

    protected $fillable = ['ticket_id', 'assigned_to', 'priorty', 'created_by', 'updated_by'];

    public function ticket()
    {
        return $this->belongsTo(SupportTickets::class);
    }

    public static function getAssignedTo($ticket_id)
    {
        $assigned_to = TicketAssignment::select('users.name')
            ->leftJoin('users', 'users.id', '=', 'ticket_assignments.assigned_to')
            ->where('ticket_assignments.ticket_id', $ticket_id)
            ->first();

        return $assigned_to ? $assigned_to->name : null;
    }
}
