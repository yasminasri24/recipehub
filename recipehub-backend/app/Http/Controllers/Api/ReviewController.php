<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Recipe;
use App\Models\Review;
use App\Services\ReviewService;

class ReviewController extends BaseController
{
    protected ReviewService $reviewService;

    public function __construct(
        ReviewService $reviewService
    ) {

        $this->reviewService = $reviewService;

    }

    /**
     * List reviews.
     */
    public function index(
        Recipe $recipe
    ) {

        $reviews = $this->reviewService
            ->getRecipeReviews($recipe);

        return $this->success(

            'Reviews retrieved successfully.',

            ReviewResource::collection($reviews)

        );

    }

    /**
     * Create or update review.
     */
    public function store(
        StoreReviewRequest $request,
        Recipe $recipe
    ) {

        $review = $this->reviewService
            ->saveReview(

                $request->user(),

                $recipe,

                $request->validated()

            );

        return $this->success(

            'Review saved successfully.',

            new ReviewResource($review)

        );

    }

    /**
     * Delete review.
     */
    public function destroy(
        Request $request,
        Review $review
    )
    {

        if ($review->user_id !== $request->user()->id) {

            return $this->error(
                'Unauthorized.',
                403
            );

        }

        $this->reviewService
            ->deleteReview($review);

        return $this->success(
            'Review deleted successfully.'
        );

    }
}
