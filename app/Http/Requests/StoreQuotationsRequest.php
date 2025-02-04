<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreQuotationsRequest extends FormRequest
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
            'organization_id' => 'required|exists:organizations,id',
            'entity_id' => 'nullable|exists:entities,id',
            'invoce_no' => 'required|max:255|unique:quotations,invoce_no',
            'invoice_date' => 'required',
            'invoice_due_date' => 'required',
            'items' => 'required|array|min:1',
            'finalAmount' => 'required',
            'billingAmount' => 'required',
            'bank_details' => 'required'
        ];
    }
    public function messages(): array
    {
        return [
            'organization_id.required' => 'The Orgnaization is required.',
            'invoce_no.required' => 'The Invoice no is required.',
            'invoce_no.unique' => 'This Invoice no is already taken.',
            'invoice_date.required' => 'The Invoice Date is required.',
            'invoice_due_date.required' => 'The Invoice due date is required.',
            'items.required' => 'The Framwork is required.',
            'finalAmount.required' => 'The Final amount is required.',
            'billingAmount.required' => 'The Billing amount is required.',
            'bank_details.required' => 'The Bank Details is required.',
        ];
    }
}
