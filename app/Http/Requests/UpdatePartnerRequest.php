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
            'email' => 'required|email|max:255|unique:partners,email,' . $this->partner->id,
            'phone' => 'required|string|max:15',
            'pancard' => 'required|string|max:50',
            'partners_status' => 'required|string|in:active,deactivate,block',
            'legalname' => 'required|string|max:255',
            'categoryid' => 'required|numeric|exists:partner_categories,id',
            'bank_accountnumber' => 'required|string|max:50',
            'bank_name' => 'required|string|max:255',
            'bank_ifsce' => 'required|string|max:20',
            'bank_ibn' => 'required|string|max:50',
            'bank_swiftcode' => 'required|string|max:20',
            'commission_rate' => 'required|numeric|between:0,99.99',
            'payment_realsed' => 'required|numeric|in:30,45,60,90',
        ];
    }

    /**
     * Get the custom messages for the validator.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The name is required.',
            'email.required' => 'The email address is required.',
            'phone.required' => 'The Primary Phone No is required.',
            'pancard.required' => 'The Pan Card is required.',
            'partners_status.required' => 'The partner status is required.',
            'legalname.required' => 'The legal name is required.',
            'categoryid.required' => 'The Partner Category is required.',
            'bank_accountnumber.required' => 'The Account Number is required.',
            'bank_name.required' => 'The Bank Name is required.',
            'bank_ifsce.required' => 'The IFSC Code is required.',
            'bank_ibn.required' => 'The Bank IBN is required.',
            'bank_swiftcode.required' => 'The Swift Code is required.',
            'commission_rate.required' => 'The Commission Rate is required.',
            'payment_realsed.required' => 'The Payment realsed is required.',
        ];
    }
}
