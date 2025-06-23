<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NutritionProxyController extends Controller
{
    public function addIngredient(Request $request)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . base64_encode('jittot:p4tvlpOQtR'),
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->asForm()->post('https://interview.workcentrix.de/ingredients.php', [
            'name' => $request->input('name'),
            'carbs' => $request->input('carbs'),
            'fat' => $request->input('fat'),
            'protein' => $request->input('protein'),
        ]);

        return response()->json($response->json(), $response->status());
    }


    public function getIngredient(Request $request)
{
    $ingredient = $request->query('ingredient');

    $response = Http::withHeaders([
        'Authorization' => 'Basic ' . base64_encode('jittot:p4tvlpOQtR')
    ])->get('https://interview.workcentrix.de/ingredients.php', [
        'ingredient' => $ingredient
    ]);

    return response()->json($response->json(), $response->status());
}

public function getRecipes()
{
    $file = storage_path('app/recipes.json');

    if (!file_exists($file)) {
        return response()->json([]);
    }

    $json = file_get_contents($file);
    $recipes = json_decode($json, true);

    return response()->json($recipes);
}



}
