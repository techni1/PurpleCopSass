<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Http\Requests\StoreOptionRequest;
use App\Http\Requests\UpdateOptionRequest;
use App\Http\Resources\SaoptionsResource;
use App\Models\Question;
use Illuminate\Http\Request;

class OptionController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:saoption-create|saoption-update|saoption-read|saoption-delete', ['only' => ['index', 'show']]);
        $this->middleware('permission:saoption-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:saoption-update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:saoption-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        $option = Option::with('question')->get();
        return inertia("People/SecurityAwarness/Options/Index", [
            'options' => SaoptionsResource::collection($option),
            'success' => session("success"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $question = Question::all();

        return inertia("People/SecurityAwarness/Options/Create", [

            'questions' => $question
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'questionId' => 'required|exists:questions,id',
            'options' => 'required|array|min:4',
            'options.*.option' => 'required|string',
            'correctOption' => 'required|integer|min:0|max:3',
        ]);

        // Assuming you have a QuestionOption model:
        foreach ($request->options as $index => $option) {
            Option::create([
                'question_id' => $request->questionId,
                'option_text' => $option['option'],
                'is_correct' => $index === (int) $request->correctOption,
            ]);
        }

        return redirect()->route('saoptions.index')->with('success', 'Options saved successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Option $option)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Option $option)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOptionRequest $request, Option $option)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Option $option)
    {
        //
    }
}
