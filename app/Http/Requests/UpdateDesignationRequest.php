<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDesignationRequest extends FormRequest
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
            'name' => 'required|unique:designations,name,' . $this->id,
            'description' => 'nullable|string',
            'created_by' => 'required|exists:users,id',
            'updated_by' => 'required|exists:users,id',

        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'name.unique' => 'The name has already been taken.',
            'description.nullable' => 'The description field can be null.',
            'description.string' => 'The description must be a string.',
            'created_by.required' => 'The creator is required.',
            'created_by.exists' => 'The creator must be a valid user.',
            'updated_by.required' => 'The updater is required.',
            'updated_by.exists' => 'The updater must be a valid user.',
        ];
    }
}
