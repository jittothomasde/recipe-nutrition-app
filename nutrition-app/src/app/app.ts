import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form';
import { RecipeFormComponent } from './components/recipe-form/recipe-form';
import { RecipeListComponent } from './components/recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IngredientFormComponent, RecipeFormComponent, RecipeListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nutrition-app';
}
