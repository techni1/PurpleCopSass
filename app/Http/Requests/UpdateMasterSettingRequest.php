<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMasterSettingRequest extends FormRequest
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
            'master_key' => 'required|string|max:255',
            'master_value' => 'required',
        ];
    }
    public function messages(): array
    {
        return [
            'master_key.required' => 'The Key is required.',
            'master_value.required' => 'The Value is required.',
        ];
    }
}
