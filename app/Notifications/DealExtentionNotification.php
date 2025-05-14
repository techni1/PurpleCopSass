<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class DealExtentionNotification extends Notification
{
    use Queueable;
    public $notificationData;

    /**
     * Create a new notification instance.
     */
    public function __construct($notificationData = [])
    {
        $this->notificationData = $notificationData;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        //return ['mail', 'database'];
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Deal  Action Notification')
            ->line($this->notificationData['message'])
            ->line("Name: " . $this->notificationData['name'])
            ->line("Reason for extention expiry date: " . $this->notificationData['extension_reason'])
            ->line("Extention date: " . $this->notificationData['extension_date']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message' => $this->notificationData['message'],
            'type' => $this->notificationData['type'],
            'name' => $this->notificationData['name'],
            'url' => $this->notificationData['url'],
        ];
    }
}