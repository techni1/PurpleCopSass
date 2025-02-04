<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrganizationRequest extends FormRequest
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
            'name' => 'required| max:255',
            'legalName' => 'required|max:255',
            'url' => 'required|url',
            'overview' => 'nullable',
            'contact_us' => 'nullable|string',
            'founded_in' => 'nullable|string',
            'terms_condition' => 'nullable|string',
            'privacy_policy' => 'nullable|string',
            'securityOfficer' => 'required|max:255',
            'address' => 'required|string',
            'logo' => 'nullable|image',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'legalName' => 'The Legal name field is required.',
            'url' => 'The URL field is required.',
            'securityOfficer' => 'The Security Officer field is required.',
            'address' => 'The Address field is required.',

        ];
    }
}
