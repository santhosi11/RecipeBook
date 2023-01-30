import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService
{
  recipesChanged = new Subject<Recipe[]>();
  // private recipes:Recipe[]=[
  //   new Recipe("Testname1",
  //   "Testdesc1",
  //   "https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1347,h_1010,c_limit/Vegetarian-Mapo-Tofu.jpg",
  //   [new ingredient('bread',5),
  //   new ingredient('meat',10)]),
  //   new Recipe("Testname2",
  //   "Testdesc2",
  //   "https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1347,h_1010,c_limit/Vegetarian-Mapo-Tofu.jpg",
  //   [new ingredient('cheese',15),
  //   new ingredient('potato',10)])
  // ];

  private recipes:Recipe[]=[];

  constructor(private slService:ShoppingListService){}

  setRecipes(recipes:Recipe[])
  {
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes()
  {
    return this.recipes.slice();
  }

  getRecipe(index:number)
  {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients:ingredient[])
  {
    this.slService.addIngredientToSL(ingredients);
  }

  addRecipe(recipe:Recipe)
  {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe)
  {
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number)
  {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}






