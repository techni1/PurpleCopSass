<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDepartmentRequest extends FormRequest
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
            'name' => 'required|unique:departments,name,' . $this->id,
            'description' => 'nullable|string',
            'created_by' => 'required|exists:users,id',
            'updated_by' => 'required|exists:users,id',

        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'name.unique' => 'This name is is already taken.',
        ];
    }
}
