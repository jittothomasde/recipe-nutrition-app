<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NutritionProxyController;
use App\Http\Controllers\RecipeController;



Route::post('/ingredient', [NutritionProxyController::class, 'addIngredient']);
Route::get('/ingredient', [NutritionProxyController::class, 'getIngredient']);
Route::post('/recipe', [RecipeController::class, 'store']);
//Route::get('/recipes', [NutritionProxyController::class, 'getRecipes']);
Route::get('/recipes', [RecipeController::class, 'index']);
