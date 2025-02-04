<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BankDetailsRequest extends FormRequest
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
            'bank_name' => 'required',
            'bank_accountname' => 'required',
            'bank_accountno' => 'required',
            'bank_ifsccode' => 'required',
            'bank_swiftcode' => 'required',
            'notes' => 'nullable',
        ];
    }
    public function messages(): array
    {
        return [
            'bank_name.required' => 'The Bank name is required.',
            'bank_accountname.required' => 'The Account name is required.',
            'bank_accountno.required' => 'The Account number is required.',
            'bank_ifsccode.required' => 'The IFSC code date is required.',
            'bank_swiftcode.required' => 'The SWIFT code  is required.',
        ];
    }
}
