<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'user_contact_no' => 'nullable|string|max:15',
            'designation_id' => 'nullable|exists:designations,id',
            'department_id' => 'nullable|exists:departments,id',
            'organization_id' => 'nullable|exists:users,id',
            'password' => 'required|string|min:8|confirmed',
            'profile_pic' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'user_remark' => 'nullable|string|max:500',
            'user_role' => 'nullable|exists:roles,name',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'email.required' => 'The email field is required.',
            'email.unique' => 'This email is already taken.',
            'user_contact_no.required' => 'The contact number field is required.',
            'organization_id.required' => 'The organization field is required.',
            'designation_id.required' => 'The designation field is required.',
            'department_id.required' => 'The department field is required.',
            'password.required' => 'The password field is required.',
            'password.confirmed' => 'The password confirmation does not match.',
            'profile_pic.image' => 'The profile picture must be an image.',
            'user_role.required' => 'The user role field is required.',
        ];
    }
}
