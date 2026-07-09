<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return [

            'name' => ['required', 'string', 'max:255'],

            'username' => ['required', 'string', 'max:100', 'unique:users'],

            'email' => ['required', 'email', 'unique:users'],

            'password' => [
                'required',
                'confirmed',
                'min:8'
            ],

        ];
    }
}
