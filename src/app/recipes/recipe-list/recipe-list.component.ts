import { RecipeService } from './../recipe.service';

//import { EventEmitter, Output, OnDestroy } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //@Output() selectedRecipeList=new EventEmitter<Recipe>();
  subscription:Subscription;
  recipes:Recipe[];
  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(){
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    );

    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.route});

  }
  /* onSelectedRecipeList(recipe:Recipe)
   {
    this.selectedRecipeList.emit(recipe);
   }*/

   ngOnDestroy()
   {
    this.subscription.unsubscribe();
   }

}
