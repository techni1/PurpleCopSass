<?php

namespace App\Http\Requests;

use App\Models\Department;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SupportteamManageRequest extends FormRequest
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
            'support_user' => 'nullable|exists:users,id',
            'support_title' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'assign_to.required' => 'The policy is required.',
            'departmentid.exists' => 'The selected department does not exist.',
            'departmentid.required' => 'The department is required.',
            'support_title.required' => 'The support title is required.',
        ];
    }
}
