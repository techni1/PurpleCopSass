<?php

namespace App\Http\Middleware;

use App\Models\DocumentAccess;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckDocumentAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // $user = $request->user();
        // $roles = $user->getRoleNames();
        // Check if the user has either 'admin' or 'editor' role
        // $document = DocumentAccess::with('document', 'user')->where('user_id', $user->id)->where('access_status', 'open')->get();

        // dd($document);
        // dd(count($document));
        // if (count($document)) {
        // return $next($request);
        // }

        // if ($user->hasAnyRole(['Super-Admin', 'Admin', 'Assignee', 'Auditor'])) {
        return $next($request);
        // }

        dd('Not Allowed');
    }
}
