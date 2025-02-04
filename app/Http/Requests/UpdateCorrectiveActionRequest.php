<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCorrectiveActionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'non_conformity_name' => 'nullable',
            'non_conformity_description' => 'nullable',
            'weakness_identification' => 'nullable',
            'detection_date' => 'nullable|date',
            'assignee_id' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date',
            'criticality_rating' => ['nullable', Rule::in(['low', 'medium', 'high'])],
            'attachment' => 'nullable',
            'status' => ['nullable', Rule::in(['open', 'close'])],
            'audit_note' => 'nullable',
        ];
    }
}
