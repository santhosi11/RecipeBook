import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../shopping-list.service';
import { ingredient } from '../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f',{static:false}) slForm:NgForm;

  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editedItem: ingredient;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.slService.startedEditing
    .subscribe((index:number)=>{
      this.editItemIndex=index;
      this.editMode=true;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    })
  }

  onAddItem(form:NgForm)
  {
    const value= form.value;
    const newIngredient = new ingredient(value.name,value.amount);
    if(this.editMode)
    {
      this.slService.updateIngredient(this.editItemIndex,newIngredient)
    }
    else
    {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();

  }
  onDelete()
  {
    this.onClear();
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
