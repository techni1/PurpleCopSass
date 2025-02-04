<?php

namespace App\Http\Requests;

use App\Models\Entity;
use App\Models\Evidence;
use App\Rules\UniqueEvidenceEntity;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;


class StoreUserEvidenceRequest extends FormRequest
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
            'evidence_id' => ['required', Rule::exists(Evidence::class, 'id'), new UniqueEvidenceEntity($this->evidence_id, $this->entity_id)],
            'entity_id' => ['required', Rule::exists(Entity::class, 'id')],
            'status' => ['required', Rule::in(['not_uploaded', 'approved', 'draft'])],
            'assignee_id' => 'nullable|exists:users,id',
            'recurrence' => ['nullable', Rule::in(['Annually', 'Bi-Annually', 'Quarterly', 'Monthly', 'Never'])],
            'review_date' => 'nullable|date',
            'file_path' => ['nullable',  File::types(['pdf', 'docx'])
                ->min(1024)
                ->max(12 * 1024),],
            'approver_id' => 'nullable|exists:users,id',
            'department_id' => 'required|exists:departments,id',
        ];
    }
    public function messages(): array
    {
        return [
            'evidence_id.required' => 'The evidence is required.',
            'evidence_id.exists' => 'The selected evidence does not exist.',
            'user_id.required' => 'The user is required.',
            'user_id.exists' => 'The selected user does not exist.',
            'entity_id.required' => 'The entity is required.',
            'entity_id.exists' => 'The selected entity does not exist.',
            'status.required' => 'The status is required.',
            'status.in' => 'The selected status is invalid. Valid options are: not_uploaded, approved, draft.',
            'assignee_id.exists' => 'The selected assignee does not exist.',
            'recurrence.required' => 'The recurrence is required.',
            'recurrence.in' => 'The selected recurrence is invalid. Valid options are: Annually, Bi-Annually, Quarterly, Monthly, Never.',
            'review_date.date' => 'The review date is not a valid date.',
            'approver_id.exists' => 'The selected approver does not exist.',
            'approver_id.required' => 'The department is required.',
            'departmentId.exists' => 'The selected department does not exist.',
            'file_path.type' => "The document type must be a PDF or DOCX",
            'file_path.min' => "The document size must larger than 1MB",
            'file_path.max' => "The document size must less than 12MB",
        ];
    }
}
