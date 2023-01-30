import { ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';
//import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
  ingredientsChanged = new Subject<ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients:ingredient[] = [
    new ingredient('apple',5),
    new ingredient('orange',7)
  ];

  getIngredients()
  {
   return this.ingredients.slice();
  }

  getIngredient(index:number)
  {
    return this.ingredients[index];
  }

  addIngredient(ingredient1:ingredient)
  {
    this.ingredients.push(ingredient1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientToSL(ingredients:ingredient[])
  {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number, newIngredient:ingredient)
  {
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number)
  {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}


