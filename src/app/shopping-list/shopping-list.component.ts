import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model'
import {ShoppingListService} from './shoppinglist.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients:Ingredient[] = [
  // 			new Ingredient('apples',5),
  // 			new Ingredient('oranges',10),
  // ];
  ingredients:Ingredient[];
  constructor(private slService:ShoppingListService) {

   }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((addedIngredient: Ingredient[])=>{

            this.ingredients=(addedIngredient);
    });

    this.slService.ingredientChangedSubject.subscribe((totalIngredient : Ingredient[])=>{
        this.ingredients=totalIngredient;

    });

    // this.slService.toshoppinglist.subscribe((ingds: Ingredient[])=>{
    //   console.log("reached");
    //   console.log(ingds);
    //    for(let ingd of ingds){
    //      this.ingredients.push(ingd);
    //    }
    //    console.log("here subs");
    //    console.log(this.ingredients);
    //  // this.ingredients.push(ingredients);
    // });

  }

  // addItem(data:Ingredient){
  //     this.ingredients.push(new Ingredient(data.name,data.amount));
  //     console.log(data);
  // }

  onItemEdit(id: number){
    this.slService.idSelected.next(id);
  }

  clearIngredientList(){
    //console.log('here');
    this.slService.clearIngredients();
    this.ingredients=[];
  }

}
