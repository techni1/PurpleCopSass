<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAccountSetupRequest extends FormRequest
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
            'folder_name' => 'required|unique:account_setups,folder_name',
            'organization_id' => 'required|exists:billings,organization_id',
            'db_name' => 'nullable|string|max:255',
            'db_host' => 'required',
            'db_port' => 'required',
            'db_username' => 'required',
            'db_password' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'The full name is required.',
            'name.max' => 'The full name may not be greater than 255 characters.',
            'folder_name.unique' => 'The folder name has already been taken.',
            'folder_name.required' => 'The folder name field is required.',
            'organization_id.required' => 'The Organization is required and also billing has done.',
            'db_name.required' => 'The Database name is required.',
            'db_host.required' => 'The Database host is required.',
            'db_port.required' => 'The Database port is required.',
            'db_username.required' => 'The Database Username is required.',
            'db_password.required' => 'The Database Password is required.',

        ];
    }
}
