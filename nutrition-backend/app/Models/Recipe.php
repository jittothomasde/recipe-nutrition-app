<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['title', 'ingredients', 'steps'];

protected $casts = [
    'ingredients' => 'array',
    'steps' => 'array',
];

}
