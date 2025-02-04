<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CorrectiveActionNotification extends Notification
{
    use Queueable;
    public $correctiveAction;


    /**
     * Create a new notification instance.
     *
     * @param  $correctiveAction
     * @return void
     */
    public function __construct($correctiveAction = [])
    {
        $this->correctiveAction = $correctiveAction;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Corrective Action Notification')
            ->line($this->correctiveAction['message'])
            ->line("Name: " . $this->correctiveAction['name'])
            ->action('View ' . $this->correctiveAction['type'], $this->correctiveAction['url']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message' => $this->correctiveAction['message'],
            'type' => $this->correctiveAction['type'],
            'name' => $this->correctiveAction['name'],
            'url' => $this->correctiveAction['url'],
        ];
    }
}
