<?php

namespace App\Http\Middleware;

use App\Http\Resources\NotificationResource;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $user = $request->user();
        $organization = $user ? Organization::find($user->organization_id) : null;

        $notifications = $user ? $user->notifications()->whereNull('read_at')->get() : [];

        $user_profile_pic_url = $user && $user->user_profile_pic
            ? Storage::url($user->user_profile_pic)
            : null;
        // dd($user_profile_pic_url);

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                'roles' => $user ? $user->getRoleNames() : [],
                'userOrganization' => $organization,
                'profilePic' => $user_profile_pic_url,

            ],

            'notifications' => NotificationResource::collection($notifications),
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
