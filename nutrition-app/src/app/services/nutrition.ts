import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private baseUrl = 'http://127.0.0.1:8000/api/ingredient';
  private authHeader = new HttpHeaders({
    'Authorization': 'Basic ' + btoa('jittot:p4tvlpOQtR'),  
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(private http: HttpClient) {}

  // addIngredient(name: string, carbs: number, fat: number, protein: number): Observable<any> {
  //   const body = new HttpParams()
  //     .set('name', name)
  //     .set('carbs', carbs.toString())
  //     .set('fat', fat.toString())
  //     .set('protein', protein.toString());

  //   return this.http.post(this.baseUrl, body.toString(), { headers: this.authHeader });
  // }
  addIngredient(name: string, carbs: number, fat: number, protein: number): Observable<any> {
  return this.http.post(this.baseUrl, { name, carbs, fat, protein });
}

  // getNutrition(ingredient: string): Observable<any> {
  //   const params = new HttpParams().set('ingredient', ingredient);
  //   return this.http.get(this.baseUrl, { headers: this.authHeader, params });
  // }

  getNutrition(ingredient: string): Observable<any> {
  const url = `http://127.0.0.1:8000/api/ingredient?ingredient=${ingredient}`;
  return this.http.get<any>(url);
}

storeRecipe(recipe: any) {
  return this.http.post('http://127.0.0.1:8000/api/recipe', recipe);
}
saveRecipe(recipe: any) {
  return this.http.post('http://127.0.0.1:8000/api/recipe', recipe);
}

getRecipes() {
  return this.http.get<any[]>('http://127.0.0.1:8000/api/recipes');
}


}
