<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;


class RecipeController extends Controller
{
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string',
        'ingredients' => 'required|array',
        'steps' => 'required|array',
    ]);

    $recipe = Recipe::create($validated);

    return response()->json([
        'status' => 'success',
        'message' => 'Recipe stored successfully',
        'data' => $recipe
    ]);
}
public function index()
{
    return response()->json(Recipe::all());
}

    
}
