<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RecipeController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\ReviewController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/recipes/{recipe}/reviews', [ReviewController::class,'index']);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', [AuthController::class, 'user']);

    Route::post('/recipes', [RecipeController::class, 'store']);

    Route::put('/recipes/{recipe}', [RecipeController::class, 'update']);

    Route::patch('/recipes/{recipe}', [RecipeController::class, 'update']);

    Route::delete('/recipes/{recipe}', [RecipeController::class, 'destroy']);

    Route::post('/recipes/{recipe}/favorite', [FavoriteController::class, 'toggle']);

    Route::get('/favorites', [FavoriteController::class, 'index']);

    Route::post('/recipes/{recipe}/reviews', [ReviewController::class,'store']);

    Route::delete('/reviews/{review}', [ReviewController::class,'destroy']);

});

/*
|--------------------------------------------------------------------------
| Recipe Routes
|--------------------------------------------------------------------------
*/

Route::get('/recipes', [RecipeController::class, 'index']);

Route::get('/recipes/{recipe}', [RecipeController::class, 'show']);

Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/tags', [TagController::class, 'index']);
