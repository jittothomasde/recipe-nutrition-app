import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NutritionService } from '../../services/nutrition';

@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingredient-form.html'
})
export class IngredientFormComponent {
  name = '';
  carbs = 0;
  fat = 0;
  protein = 0;
  result: any = null;

  constructor(private nutritionService: NutritionService) {}

  submit() {
    this.nutritionService.addIngredient(this.name, this.carbs, this.fat, this.protein)
      .subscribe({
        next: res => this.result = res,
        error: err => this.result = { error: true, message: err.error?.message || err.message }
      });
  }
}
