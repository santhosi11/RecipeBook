import { RecipeService } from './../../recipe.service';
//import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index:number;
  //@Output() selectedRecipeItem= new EventEmitter<void>();
  //constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  // onSelectedRecipeItem()
  // {
  //   this.recipeService.selectedRecipeItem.emit(this.recipe)
  // }

}
