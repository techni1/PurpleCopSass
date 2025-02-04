<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuResource;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MenuController extends Controller
{
    /*
1. single page arch.
2. Role Based Access
    */


    function __construct()
    {
        $this->middleware('permission:menu-create|menu-update|menu-read|menu-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:menu-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:menu-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:menu-delete', ['only' => ['destroy']]);
    }


    public function index()
    {

        $menu = Menu::get();

        return inertia("Menu/Index", [
            'menus' => MenuResource::collection($menu),
            'success' => session("success"),
        ]);
    }

    public function create() {}

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'nullable|string|max:255',
            'status' => 'required|boolean',
        ]);


        $validatedData['added_by'] = Auth::id();
        $validatedData['updated_by'] = Auth::id();

        Menu::create($validatedData);
        // return to_route('menu.index')->with('success', "Menu Added");
    }


    public function edit($id)
    {

        $menu = Menu::findOrFail($id);
        return response()->json($menu);
    }

    public function show(Menu $menu)
    {


        echo '<pre>';
        print_R($menu);

        exit;
    }

    public function update(Request $request, Menu $menu)
    {

        $updatedData = $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'nullable|string|max:255',
            'status' => 'required|boolean',
        ]);

        $updatedData['updated_by'] = Auth::id();

        $menu->update($updatedData);
        // return to_route("menu.index")->with("success", "Menu was updated");
    }
}
