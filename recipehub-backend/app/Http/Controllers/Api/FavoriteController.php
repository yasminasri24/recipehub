<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use App\Services\FavoriteService;
use Illuminate\Http\Request;

class FavoriteController extends BaseController
{
    protected FavoriteService $favoriteService;

    public function __construct(
        FavoriteService $favoriteService
    ) {
        $this->favoriteService = $favoriteService;
    }

    public function toggle(
        Request $request,
        Recipe $recipe
    ) {

        $favorited = $this->favoriteService
            ->toggleFavorite(
                $request->user(),
                $recipe
            );

        return $this->success(

            $favorited
                ? 'Recipe added to favorites.'
                : 'Recipe removed from favorites.',

            [

                'is_favorited' => $favorited,

                'favorites_count' => $recipe
                    ->favoritedBy()
                    ->count(),

            ]

        );
    }

    public function index(Request $request)
    {

        $recipes = $this->favoriteService
            ->getFavorites(
                $request->user()
            );

        return $this->success(

            'Favorite recipes retrieved successfully.',

            RecipeResource::collection($recipes)

        );

    }
}
