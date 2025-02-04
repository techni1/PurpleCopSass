<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DocumentViewApiController extends Controller
{
    public function show($filepath)
    {
        // Build the full path to the file
        $file = storage_path("app/public/{$filepath}");
        if (file_exists($file)) {
            return response()->file($file);
        }
        return response()->json(['error' => 'File not found.'], 404);
    }
}
