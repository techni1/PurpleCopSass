<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePartnerRequest extends FormRequest
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
            'email' => 'required|email|max:255|unique:partners,email',
            'email' => 'required',
            'phone' => 'required',
            'pancard' => 'required',
            'partners_status' => 'required',
            'legalname' => 'required|string|max:255',
            'bank_accountnumber' => 'required|string|max:255',
            'bank_name' => 'required',
            'bank_ifsce' => 'required',
            'second_contactno' => 'nullable|string',
            'categoryid' => 'required|numeric',
            'commission_rate' => 'required|between:0,99.99',
            'tprm' => 'required',
            'msme' => 'required',
            'payment_realsed' => 'required',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,jfif|max:2048',
            'gst_vat_document' => 'nullable|file|mimetypes:application/pdf,application/octet-stream,image/png,image/jpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document|max:2048',
            'cancel_cheque' => 'nullable|file|mimetypes:application/pdf,application/octet-stream,image/png,image/jpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document|max:2048',
            'coi_document' => 'nullable|file|mimetypes:application/pdf,application/octet-stream,image/png,image/jpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document|max:2048',
            'pancard_document' => 'nullable|file|mimetypes:application/pdf,application/octet-stream,image/png,image/jpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document|max:2048',
        ];
    }


    public function messages(): array
    {
        return [
            'name.required' => 'The full name is required.',
            'name.max' => 'The full name may not be greater than 255 characters.',
            'email.required' => 'The email address is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already taken. Please choose another.',
            'phone.required' => 'The Primary Phone No is required.',
            'pancard.required' => 'The Pan Card is required.',
            'partners_status.required' => 'The partner status is required.',
            'legalname.required' => 'The legal name is required.',
            'bank_accountnumber.required' => 'The Account Number is required.',
            'bank_name.required' => 'The Bank Name is required.',
            'bank_ifsce.required' => 'The IFSC Code is required.',
            'category_id.required' => 'The Partner Category is required.',
            'commission_rate.required' => 'The Commission Rate is required.',
            'tprm.required' => 'TPRM '
        ];
    }
}