import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
  			new Ingredient('apples',5),
  			new Ingredient('oranges',10),
  ];
  constructor() { }

  ngOnInit() {
  }

  addItem(data:any){
      this.ingredients.push(new Ingredient(data.name,data.amount));
      console.log(data);
  }

  clearIngredientList(){
    console.log('here');
    this.ingredients=[];
  }

}
