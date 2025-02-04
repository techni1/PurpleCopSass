<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDocumentAccessRequest extends FormRequest
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
            'users' => ['required', 'array'], // Ensure it's an array
            'users.*' => ['exists:users,id'], // Each user ID must exist in the users table
            'documents' => ['required', 'array'], // Ensure it's an array
            'documents.*' => ['exists:documents,id'], // Each document ID must exist in the documents table
            'date' => ['required', 'date'],
        ];
    }
    /**
     * Custom error messages for validation.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'users.required' => 'You must select at least one user.',
            'users.*.exists' => 'Selected user does not exist.',
            'documents.required' => 'You must select at least one document.',
            'documents.*.exists' => 'Selected document does not exist.',
            'date.required' => 'Must be a valid date',
        ];
    }
}
