import {Ingredient} from '../shared/ingredients.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  ingredientsChanged: EventEmitter<Ingredient[]>= new EventEmitter();
  toshoppinglist: EventEmitter<Ingredient[]>= new EventEmitter();

  ingredients:Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('oranges',10),
];

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
   //console.log(ingredient);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
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
}
