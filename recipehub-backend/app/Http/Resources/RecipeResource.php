<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class RecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'user_id' => $this->user_id,

            'title' => $this->title,

            'description' => $this->description,

            'image' => $this->image? asset('storage/' . $this->image) : null,

            'cooking_time' => $this->cooking_time,

            'servings' => $this->servings,

            'difficulty' => $this->difficulty,

            'category' => $this->category
                ? [
                    'id' => $this->category->id,
                    'name' => $this->category->name,
                ]
                : null,

            'author' => [
                'id' => $this->user?->id,
                'name' => $this->user?->name,
            ],

            'ingredients' => $this->ingredients,

            'steps' => $this->steps,

            'tags' => $this->tags->map(function ($tag) {
                return [
                    'id' => $tag->id,
                    'name' => $tag->name,
                ];
            }),

            'reviews_count' => $this->reviews()->count(),

            'average_rating' => round(
                $this->reviews()->avg('rating') ?? 0,
                1
            ),

            'total_reviews' => $this->reviews()->count(),

            'is_favorited' => Auth::check()
                ? $this->favoritedBy()
                    ->where('user_id', Auth::id())
                    ->exists()
                : false,

            'favorites_count' => $this->favoritedBy()->count(),

            'created_at' => $this->created_at,

        ];
    }
}
