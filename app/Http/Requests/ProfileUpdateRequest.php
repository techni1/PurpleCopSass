<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'user_contact_no' => 'nullable|string|max:15',
            'user_remark' => 'nullable',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'The Name is required.',
            'email.required' => 'The Email is required.',
            'email.unique' => 'The Email has already been taken.',
        ];
    }
}
