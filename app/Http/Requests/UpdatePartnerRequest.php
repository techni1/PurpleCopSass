<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePartnerRequest extends FormRequest
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
            'phone' => 'required',
            'pancard' => 'required',
            'partners_status' => 'required',
            'legalname' => 'required|string|max:255',
            'account_number' => 'required|string|max:255',
            'bank_name' => 'required',
            'ifsc_code' => 'required',
            'second_contactno' => 'nullable|string',
            'category_id' => 'required|numeric',
            'commission_rate' => 'required|between:0,99.99',

        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'The full name is required.',
            'name.max' => 'The full name may not be greater than 255 characters.',
            'phone.required' => 'The Primary Phone No is required.',
            'pancard.required' => 'The Pan Card is required.',
            'partners_status.required' => 'The partner status is required.',
            'legalname.required' => 'The legal name is required.',
            'account_number.required' => 'The Account Number is required.',
            'bank_name.required' => 'The Bank Name is required.',
            'ifsc_code.required' => 'The IFSC Code is required.',
            'category_id.required' => 'The Partner Category is required.',
            'commission_rate.required' => 'The Commission Rate is required.',
        ];
    }
}
