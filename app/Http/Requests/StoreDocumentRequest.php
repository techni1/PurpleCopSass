<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreDocumentRequest extends FormRequest
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
            'model_id' => 'nullable',
            'document_category' => 'required|exists:document_categories,name',
            "organization_id" => 'required|exists:organizations,id',
            'attachment' => 'required|mimes:pdf,doc,docx,xlsx,',
            "global_access" => ['nullable', Rule::in([1, 0])]
        ];
    }

    public function messages(): array
    {
        return [
            'document_category_id' => 'The Document Category is required.',
            'attachment.required' => 'An attachment is required.',
            'attachment.mimes' => 'The attachment must be a file of type: pdf, doc, docx, xlsx.',
        ];
    }
}
