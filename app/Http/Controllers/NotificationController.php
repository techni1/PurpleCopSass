<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;

class NotificationController extends Controller
{
    public function markAsRead($id)
    {
        // Mark a single notification as read
        $notification = DatabaseNotification::find($id);
        $notification->markAsRead();
    }
}
