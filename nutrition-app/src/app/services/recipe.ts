import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://127.0.0.1:8000/api/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  saveRecipe(recipe: any): Observable<any> {
    return this.http.post(this.apiUrl, recipe);
  }
}
