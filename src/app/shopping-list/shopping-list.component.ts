import { ShoppingListService } from './shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:ingredient[];
  private ingChangedSub: Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients();
    this.ingChangedSub=this.slService.ingredientsChanged.subscribe(
      (ingredients:ingredient[])=>{
        this.ingredients=ingredients;
      }
    )
  }
  onEditItem(index:number)
  {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
      this.ingChangedSub.unsubscribe();
  }


}
