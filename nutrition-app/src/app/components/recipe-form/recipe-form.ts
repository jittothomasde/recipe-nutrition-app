import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NutritionService } from '../../services/nutrition';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-form.html',
  styleUrls: ['./recipe-form.css']
})
export class RecipeFormComponent {
  title: string = '';
  ingredients: string[] = [''];
  steps: string[] = [''];
  ingredientNutrition: any[] = [];

    constructor(private nutritionService: NutritionService) {}


  addIngredient() {
    this.ingredients.push('');
    this.ingredientNutrition.push(null);

  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
      this.ingredientNutrition.splice(index, 1);

  }

  addStep() {
    this.steps.push('');
  }

  removeStep(index: number) {
    this.steps.splice(index, 1);
  }

    onIngredientChange(name: string, index: number) {
    if (!name) return;

    this.nutritionService.getNutrition(name).subscribe({
      next: (data) => this.ingredientNutrition[index] = data,
      error: () => this.ingredientNutrition[index] = { error: true }
    });
  }

saveRecipe() {
  const recipe = {
    title: this.title,
    ingredients: this.ingredients,
    steps: this.steps
  };

  this.nutritionService.saveRecipe(recipe).subscribe({
    next: (res) => console.log('✅ Recipe Saved:', res),
    error: (err) => console.error('❌ Save failed:', err)
  });
}

}