<?php

namespace App\Http\Middleware;

use App\Models\Nda;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckNdaStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        $role = $user->getRoleNames();
        if ($role[0] == 'Guest') {
            $nda = Nda::where('user_id', $user->id)->firstOrFail();
            if ($nda) {
                if ($nda->nda_status == "not_signed") {
                    return redirect()->route('nda.sign');
                }
                if ($nda->nda_status == "signed") {
                    return $next($request);
                }
            } else {
                return 404;
            }
        }
        return $next($request);
    }
}
