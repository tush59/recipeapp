import {Ingredient} from '../shared/ingredients.model'
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientsChanged: EventEmitter<Ingredient[]>= new EventEmitter();
  toshoppinglist: EventEmitter<Ingredient[]>= new EventEmitter();
  ingredientChangedSubject = new Subject();
  idSelected= new Subject();
  ingredients:Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('oranges',10),
];

getIngredients(){
  return this.ingredients.slice();
}

getIngredientById(id:number){
  return this.ingredients[id];

}

addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
}

updateIngredient(editIndex: number, updatedIngredient: Ingredient){
      this.ingredients[editIndex]=updatedIngredient;
      this.ingredientChangedSubject.next(this.ingredients.slice());
}

addToShoppingList(ingredient: Ingredient[]){
  console.log(ingredient);
  // for(let ingd of ingredient){
  //  this.ingredients.push(ingd);
  //  }
  console.log(ingredient);
  console.log("here <br/>");
  console.log(...ingredient);
  const {amount}=ingredient[0];
  console.log(amount);
  this.ingredients.push(...ingredient);
  this.toshoppinglist.emit(this.ingredients);
}

  clearIngredients(){
    this.ingredients=[];
  }
  deleteItem(id: number){
    this.ingredients.splice(id,1);
    this.ingredientChangedSubject.next(this.ingredients.slice());
  }
}
