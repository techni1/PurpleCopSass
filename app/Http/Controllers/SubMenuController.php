<?php

namespace App\Http\Controllers;

use App\Http\Resources\SubmenuResource;
use App\Models\Menu;
use App\Models\Submenu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubMenuController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:submenu-create|submenu-update|submenu-read|submenu-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:submenu-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:submenu-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:submenu-delete', ['only' => ['destroy']]);
    }


    public function index()
    {
        $submenu = Submenu::with('menu')->get();
        $menu = Menu::get();
        return inertia("Submenu/Index", [
            'submenus' => SubmenuResource::collection($submenu),
            'menu' => $menu,
            'success' => session("success"),
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'menuid' => 'required',
            'url' => 'nullable|string|max:255',
            'status' => 'required|boolean',
        ]);

        $indata['menuid'] = $validatedData['menuid'];
        $indata['name'] = $validatedData['name'];
        $indata['url'] = $validatedData['url'];
        $indata['submenu_status'] = $validatedData['status'];
        Submenu::create($indata);
    }


    public function edit($id)
    {
        $submenu = Submenu::with('menu')->findOrFail($id);
        return response()->json($submenu);
    }

    //   public function stroe(Request $request) {}

    public function update() {}
}
