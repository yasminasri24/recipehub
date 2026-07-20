<?php

namespace App\Services;

use App\Models\Recipe;
use App\Models\User;

class FavoriteService
{
    public function toggleFavorite(
        User $user,
        Recipe $recipe
    ) {

        if ($user->favorites()->where('recipe_id', $recipe->id)->exists()) {

            $user->favorites()->detach($recipe->id);

            return false;

        }

        $user->favorites()->attach($recipe->id);

        return true;

    }

    public function getFavorites(User $user)
    {
        return $user
            ->favorites()
            ->with([
                'category',
                'tags',
                'reviews',
                'user'
            ])
            ->latest()
            ->get();
    }
}
