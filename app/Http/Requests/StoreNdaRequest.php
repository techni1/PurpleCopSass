<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNdaRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'organization' => 'required|string|max:255',
            'user_meta_data.address' => 'required|string|max:255',
            'user_meta_data.state' => 'required|string|max:255',
            'user_meta_data.country' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'user_role' => 'nullable|exists:roles,name',
        ];
    }

    /**
     * Custom error messages for validation failures.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The full name is required.',
            'name.max' => 'The full name may not be greater than 255 characters.',
            'email.required' => 'The email address is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already taken. Please choose another.',
            'organization.required' => 'The organization name is required.',
            'user_meta_data.address.required' => 'The organization address is required.',
            'user_meta_data.state.required' => 'The organization state is required.',
            'user_meta_data.country.required' => 'The organization country is required.',
            'password.required' => 'The password is required.',
            'password.min' => 'The password must be at least 8 characters.',
            'password.confirmed' => 'The password confirmation does not match.',
        ];
    }
}
