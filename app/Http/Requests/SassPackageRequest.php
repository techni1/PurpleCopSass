<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SassPackageRequest extends FormRequest
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
            'payment_type' => 'nullable|string|max:255',
            'no_of_user' => 'required',
            'grace_period_day' => 'required',
            'no_of_integration' => 'required',
            'package_amount' => 'required',

        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'The full name is required.',
            'name.max' => 'The full name may not be greater than 255 characters.',
            'payment_type.required' => 'The Payment type is required.',

            'no_of_user.required' => 'The No of User is required.',
            'grace_period_day.required' => 'The Grace period is required.',
            'no_of_integration.required' => 'The No of integration is required.',
            'package_amount.required' => 'The Package amount is required.',
        ];
    }
}