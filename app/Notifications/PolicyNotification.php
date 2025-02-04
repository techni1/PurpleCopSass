<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PolicyNotification extends Notification
{
    use Queueable;

    public $requirement;

    /**
     * Create a new notification instance.
     *
     * @param  $requirement
     * @return void
     */
    public function __construct($requirement = [])
    {
        $this->requirement = $requirement;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];  // Add 'mail' if you want to send emails too: ['database', 'mail']
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject($this->requirement['type'] . ' Notification')
            ->line($this->requirement['message'])
            ->line("Name: " . $this->requirement['name'])
            ->action('View ' . $this->requirement['type'], $this->requirement['url']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message' => $this->requirement['message'],
            'type' => $this->requirement['type'],
            'name' => $this->requirement['name'],
            'url' => $this->requirement['url'],
        ];
    }
}
