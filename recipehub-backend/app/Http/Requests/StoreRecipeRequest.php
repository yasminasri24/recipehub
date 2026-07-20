<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'title' => 'required|string|max:255',

            'description' => 'required|string',

            'category_id' => 'required|exists:categories,id',

            'image' => 'nullable|image|max:2048',

            'cooking_time' => 'required|integer|min:1',

            'servings' => 'required|integer|min:1',

            'difficulty' => 'required|in:Easy,Medium,Hard',

            'ingredients' => 'required|array|min:1',

            'ingredients.*.ingredient' => 'required|string|max:255',

            'ingredients.*.quantity' => 'required|string|max:100',

            'steps' => 'required|array|min:1',

            'steps.*.instruction' => 'required|string',

            'tags' => 'nullable|array',

            'tags.*' => 'exists:tags,id',

        ];
    }
}
