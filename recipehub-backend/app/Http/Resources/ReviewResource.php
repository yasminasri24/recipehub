<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'user_id' => $this->user_id,

            'recipe_id' => $this->recipe_id,

            'rating' => $this->rating,

            'comment' => $this->comment,

            'user' => [

                'id' => $this->user?->id,

                'name' => $this->user?->name,

                'profile_picture' => $this->user?->profile_picture,

            ],

            'created_at' => $this->created_at,

            'updated_at' => $this->updated_at,

        ];
    }
}
