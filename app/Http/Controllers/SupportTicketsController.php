<?php

namespace App\Http\Controllers;

use App\Http\Resources\SupportTicketsResource;
use App\Models\Department;
use App\Models\Organization;
use App\Models\SupportteamManage;
use App\Models\SupportTickets;
use App\Models\TicketAssignment;
use App\Models\TicketReply;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SupportTicketsController extends Controller
{

    function __construct()
    {
        $this->middleware('permission:supportticket-create|supportticket-update|supportticket-read|supportticket-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:supportticket-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:supportticket-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:supportticket-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $support = SupportTickets::get();
        $organization = Organization::all();
        $departments = Department::all();
        $userbyDept = [];

        if ($request->departmentid) {
            $userbyDept = SupportteamManage::select('supportteam_manages.id', 'users.name', 'supportteam_manages.support_title')
                ->leftjoin('users', 'users.id', '=', 'support_user')
                ->where('users.department_id', '=', $request->departmentid)
                ->where('support_status', '!=', '0')
                ->where('attendance', '=', '1')
                ->orderBy('users.name', 'asc')
                ->get();
        }

        return inertia("Support/Index", [
            'tickets' => SupportTicketsResource::collection($support),
            'organization' => $organization,
            'departments' => $departments,
            'userbyDept' => $userbyDept,
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }



    public function createTicket(Request $request)
    {


        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'organization_user_id' => 'required|exists:users,id',
        ]);



        $ticket = SupportTickets::create($validated);

        return response()->json(['message' => 'Ticket created successfully!', 'ticket' => $ticket]);
    }


    public function assignTicket(Request $request, $ticketId)
    {

        $validated = $request->validate([
            'assigned_to' => 'required|exists:users, id',
        ]);
        $ticket = SupportTickets::findOrFail($ticketId);
        $assignment = TicketAssignment::updateOrCreate(
            ['ticket_id' => $ticketId],
            ['assigned_to' => $validated['assigned_to']]
        );

        $ticket->status = 'in_progress';
        $ticket->save();

        return response()->json(['message' => 'Ticket assigned successfully!', 'assignment' => $assignment]);
    }

    public function addReply(Request $request, $ticketId)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'message' => 'required|string',
        ]);

        $ticket = SupportTickets::findOrFail($ticketId);
        $reply = TicketReply::create([
            'ticket_id' => $ticketId,
            'user_id' => $validated['user_id'],
            'message' => $validated['message'],
        ]);

        // Auto-assign to previous user if not the original organization user
        if ($ticket->organization_user_id != $validated['user_id']) {
            $assignment = TicketAssignment::where('ticket_id', $ticketId)->first();
            if ($assignment) {
                $assignment->assigned_to = $assignment->assigned_to;
                $assignment->save();
            }
        }

        return response()->json(['message' => 'Reply added successfully!', 'reply' => $reply]);
    }

    public function markResolved($ticketId)
    {
        $ticket = SupportTickets::findOrFail($ticketId);
        $ticket->status = 'resolved';
        $ticket->save();

        return response()->json(['message' => 'Ticket marked as resolved!', 'ticket' => $ticket]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'department_id' => 'required',
            'assign_to' => 'required|exists:users,id',
        ]);

        $validated['priorty'] = $request->priorty;
        $validated['organization_id'] = $request->organization_id;

        if ($request->has('entity_id')) {
            $validated['entity_id']  = $request->entity_id ? $request->entity_id : null;
        }

        $ticket = SupportTickets::create($validated);


        // Also add this in Assign ticket table

        $addData = [
            'ticket_id' => $ticket->id,
            'assigned_to' => $request->assign_to,
            'priorty' => $request->priorty,
            'created_by' => Auth::id(),
            'updated_by' => Auth::id(),
        ];

        TicketAssignment::create($addData);
    }

    /**
     * Display the specified resource.
     */
    public function show(SupportTickets $supportTickets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SupportTickets $supportTickets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SupportTickets $supportTickets)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SupportTickets $supportTickets)
    {
        //
    }
    public function ticketassign(Request $request)
    {

        $validated = $request->validate([
            'ticket_id' => 'required|exists:support_tickets,id',
            'priorty' => 'required|string',
            'assigned_to' => 'required',
        ]);
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        TicketAssignment::create($validated);
    }
}
