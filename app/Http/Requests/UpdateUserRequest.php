<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255|unique:users,email,' . $this->id,
            'user_contact_no' => 'nullable|string|max:15',
            'designation_id' => 'nullable|exists:designations,id',
            'department_id' => 'nullable|exists:departments,id',
            'organization_id' => 'nullable|exists:users,id',
            'password' => 'nullable|string|min:8|confirmed',
            'profile_pic' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'user_remark' => 'nullable|string|max:500',
            'user_role' => 'nullable|exists:roles,name',
        ];
    }
    public function messages()
    {
        return [
            'email.unique' => 'This email is already taken.',
            'password.confirmed' => 'The password confirmation does not match.',
            'profile_pic.image' => 'The profile picture must be an image.',
        ];
    }
}
