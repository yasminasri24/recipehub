<?php

namespace App\Services;

use App\Models\Recipe;
use App\Models\Review;
use App\Models\User;

class ReviewService
{
    /**
     * Create or update review.
     */
    public function saveReview(
        User $user,
        Recipe $recipe,
        array $data
    ) {

        return Review::updateOrCreate(

            [

                'user_id' => $user->id,

                'recipe_id' => $recipe->id,

            ],

            [

                'rating' => $data['rating'],

                'comment' => $data['comment'],

            ]

        );

    }

    /**
     * Delete review.
     */
    public function deleteReview(
        Review $review
    ) {

        $review->delete();

    }

    /**
     * Get recipe reviews.
     */
    public function getRecipeReviews(
        Recipe $recipe
    ) {

        return $recipe
            ->reviews()
            ->with('user')
            ->latest()
            ->get();

    }
}
