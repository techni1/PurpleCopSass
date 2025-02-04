<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    function __construct()
    {
        $this->middleware('permission:category-create|category-update|category-read|category-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:category-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:category-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:category-delete', ['only' => ['destroy']]);
    }


    public function index()
    {
        //
        $sacategory = Category::all();


        return inertia('Query/Category/Index', [
            'category' => CategoryResource::collection($sacategory),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia(
            'Query/Category/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();

        $indata['name'] = $data['name'];

        Category::create($indata);

        // $name = $data['name'];
        // return to_route('sacategory.index')->with('success', "Security Awareness - Category \"$name\" Added");
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {

        $data = $request->validated();

        $category->update($data);

        //return to_route('category.index')->with('success', "Cate \"$department->name \" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $name = $category->name;
        $category->delete();
        return to_route('category.index')->with('success', "Category \"$name\" was deleted");
    }
}
