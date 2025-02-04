<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class FindingNotification extends Notification
{
    use Queueable;

    public $finding;

    /**
     * Create a new notification instance.
     */
    public function __construct($finding = [])
    {
        $this->finding = $finding;
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
            ->subject('Finding Notification')
            ->line($this->finding['message'])
            ->line("Name: " . $this->finding['name'])
            ->action('View ' . $this->finding['type'], $this->finding['url']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message' => $this->finding['message'],
            'type' => $this->finding['type'],
            'name' => $this->finding['name'],
            'url' => $this->finding['url'],
        ];
    }
}
