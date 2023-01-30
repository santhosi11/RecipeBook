import { AuthService } from './../auth/auth.service';
import { ingredient } from './ingredient.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { map, take, tap, exhaustMap } from 'rxjs/operators';


@Injectable()
export class DataStorageService
{
  constructor(private http:HttpClient,private recipeService:RecipeService, private authService:AuthService)
  {}

  storeRecipes()
  {
    const recipes = this.recipeService.getRecipes();
    this.http
    .put('https://angular-project-recipebook-default-rtdb.firebaseio.com/recipes.json',recipes)
    .subscribe(
      response=>{
        console.log(response);
      }
    );
  }

  fetchRecipes()
  {
    return this.http
    .get<Recipe[]>('https://angular-project-recipebook-default-rtdb.firebaseio.com/recipes.json')
    .pipe(
    map(recipes=>{
      return recipes.map(recipe=>{
        return {...recipe, ingredients:recipe.ingredients? recipe.ingredients:[]};
      });
    }),
    tap(recipes=>{
      this.recipeService.setRecipes(recipes);
    })
    )

  }

}


