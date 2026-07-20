<?php

namespace App\Services;

use App\Models\Recipe;
use App\Models\RecipeIngredient;
use App\Models\RecipeStep;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class RecipeService
{
    /**
     * Get all recipes.
     */
    public function getRecipes()
    {
        return Recipe::with([
            'user',
            'category',
            'ingredients',
            'steps',
            'tags',
            'reviews'
        ])
        ->latest()
        ->paginate(12);
    }

    /**
     * Get one recipe.
     */
    public function getRecipe(Recipe $recipe)
    {
        return $recipe->load([
            'user',
            'category',
            'ingredients',
            'steps',
            'tags',
            'reviews.user',
        ]);
    }

    /**
     * Create recipe.
     */
    public function createRecipe(array $data)
    {
        return DB::transaction(function () use ($data) {

            /*
            |--------------------------------------------------------------------------
            | Upload Image (Optional)
            |--------------------------------------------------------------------------
            */

            $imagePath = null;

            if (isset($data['image'])) {

                $imagePath = $data['image']->store(
                    'recipes',
                    'public'
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Create Recipe
            |--------------------------------------------------------------------------
            */

            $recipe = Recipe::create([

                'user_id' => Auth::id(),

                'category_id' => $data['category_id'],

                'title' => $data['title'],

                'description' => $data['description'],

                'image' => $imagePath,

                'cooking_time' => $data['cooking_time'],

                'servings' => $data['servings'],

                'difficulty' => $data['difficulty'],

            ]);

            /*
            |--------------------------------------------------------------------------
            | Ingredients
            |--------------------------------------------------------------------------
            */

            foreach ($data['ingredients'] as $ingredient) {

                RecipeIngredient::create([

                    'recipe_id' => $recipe->id,

                    'ingredient' => $ingredient['ingredient'],

                    'quantity' => $ingredient['quantity'],

                ]);

            }

            /*
            |--------------------------------------------------------------------------
            | Steps
            |--------------------------------------------------------------------------
            */

            foreach ($data['steps'] as $index => $step) {

                RecipeStep::create([

                    'recipe_id' => $recipe->id,

                    'step_number' => $index + 1,

                    'instruction' => $step['instruction'],

                ]);

            }

            /*
            |--------------------------------------------------------------------------
            | Tags
            |--------------------------------------------------------------------------
            */

            if (!empty($data['tags'])) {

                $recipe->tags()->sync($data['tags']);

            }

            return $recipe->load([
                'user',
                'category',
                'ingredients',
                'steps',
                'tags',
                'reviews',
            ]);

        });
    }

    /**
     * Update recipe.
     */
    public function updateRecipe(Recipe $recipe, array $data)
    {
        $recipe->update($data);

        return $recipe->refresh();
    }

    /**
     * Delete recipe.
     */
    public function deleteRecipe(Recipe $recipe)
    {
        $recipe->delete();

        return true;
    }

    /**
     * Search recipes.
     */
    public function searchRecipes(
        string $keyword
    )
    {
        //
    }

    /**
     * Get recipes by category.
     */
    public function getRecipesByCategory(
        int $categoryId
    )
    {
        //
    }

    /**
     * Get recipes by tag.
     */
    public function getRecipesByTag(
        int $tagId
    )
    {
        //
    }

    /**
     * Get latest recipes.
     */
    public function getLatestRecipes()
    {
        //
    }

    /**
     * Get trending recipes.
     */
    public function getTrendingRecipes()
    {
        //
    }

    /**
     * Get recipes by authenticated user.
     */
    public function getUserRecipes()
    {
        //
    }
}
