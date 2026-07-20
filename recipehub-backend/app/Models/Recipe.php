<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'description',
        'image',
        'cooking_time',
        'servings',
        'difficulty',
    ];

    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    */

    // Recipe belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Recipe belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Recipe has many ingredients
    public function ingredients()
    {
        return $this->hasMany(RecipeIngredient::class);
    }

    // Recipe has many steps
    public function steps()
    {
        return $this->hasMany(RecipeStep::class)
                    ->orderBy('step_number');
    }

    // Recipe has many reviews
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    // Recipe belongs to many tags
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    // Users who favorited this recipe
    public function favoritedBy()
    {
        return $this->belongsToMany(
            User::class,
            'favorites'
        );
    }
}
