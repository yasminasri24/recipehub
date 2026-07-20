<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\UpdateRecipeRequest;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use App\Services\RecipeService;

class RecipeController extends BaseController
{
    protected RecipeService $recipeService;

    public function __construct(RecipeService $recipeService)
    {
        $this->recipeService = $recipeService;
    }

    /**
     * Display all recipes.
     */
    public function index()
    {
        $query = Recipe::with([
            'user',
            'category',
            'tags',
            'ingredients',
            'steps',
            'reviews',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Search
        |--------------------------------------------------------------------------
        */

        if (request()->filled('search')) {

            $query->where(
                'title',
                'like',
                '%' . request('search') . '%'
            );

        }

        /*
        |--------------------------------------------------------------------------
        | Category
        |--------------------------------------------------------------------------
        */

        if (request()->filled('category')) {

            $query->where(
                'category_id',
                request('category')
            );

        }

        /*
        |--------------------------------------------------------------------------
        | Tag
        |--------------------------------------------------------------------------
        */

        if (request()->filled('tag')) {

            $query->whereHas('tags', function ($q) {

                $q->where(
                    'tags.id',
                    request('tag')
                );

            });

        }

        /*
        |--------------------------------------------------------------------------
        | Sort
        |--------------------------------------------------------------------------
        */

        switch (request('sort')) {

            case 'oldest':

                $query->oldest();

                break;

            case 'title':

                $query->orderBy('title');

                break;

            default:

                $query->latest();

        }

        $recipes = $query->paginate(12);

        return $this->success(
            'Recipes retrieved successfully.',
            RecipeResource::collection($recipes)
        );
    }

    /**
     * Store a newly created recipe.
     */
    public function store(StoreRecipeRequest $request)
    {
        $recipe = $this->recipeService->createRecipe(
            $request->validated()
        );

        return $this->success(
            'Recipe created successfully.',
            new RecipeResource($recipe),
            201
        );
    }

    /**
     * Display the specified recipe.
     */
    public function show(Recipe $recipe)
    {
        $recipe = $this->recipeService->getRecipe($recipe);

        return $this->success(
            'Recipe retrieved successfully.',
            new RecipeResource($recipe)
        );
    }

    /**
     * Update the specified recipe.
     */
    public function update(
        UpdateRecipeRequest $request,
        Recipe $recipe
    ) {

       if ($recipe->user_id !== Auth::id()) {

            return $this->error(
                'Unauthorized.',
                403
            );

        }

        $recipe = $this->recipeService->updateRecipe(
            $recipe,
            $request->validated()
        );

        return $this->success(
            'Recipe updated successfully.',
            new RecipeResource($recipe)
        );
    }

    /**
     * Remove the specified recipe.
     */
    public function destroy(Recipe $recipe)
    {

        if ($recipe->user_id !== Auth::id()) {

            return $this->error(
                'Unauthorized.',
                403
            );

        }

        $this->recipeService->deleteRecipe($recipe);

        return $this->success(
            'Recipe deleted successfully.'
        );
    }
}
