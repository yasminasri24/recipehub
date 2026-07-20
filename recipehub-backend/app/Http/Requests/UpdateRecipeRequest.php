<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'title' => 'sometimes|string|max:255',

            'description' => 'sometimes|string',

            'category_id' => 'sometimes|exists:categories,id',

            'image' => 'nullable|image|max:2048',

            'cooking_time' => 'sometimes|integer|min:1',

            'servings' => 'sometimes|integer|min:1',

            'difficulty' => 'sometimes|in:Easy,Medium,Hard',

            'ingredients' => 'sometimes|array',

            'ingredients.*.ingredient' => 'required|string|max:255',

            'ingredients.*.quantity' => 'required|string|max:100',

            'steps' => 'sometimes|array',

            'steps.*.instruction' => 'required|string',

            'tags' => 'sometimes|array',

            'tags.*' => 'exists:tags,id',
        ];
    }
}
