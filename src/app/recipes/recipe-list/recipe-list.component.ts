import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {Recipes} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[] = [
  new Recipes('first receipe','recipe description','https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'),
  new Recipes('second receipe','recipe description','https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg'),

  ];

  @Output() recipedetail: EventEmitter<Recipes>= new EventEmitter();
  name:Recipes[];
  recipedata(data){
   console.log(data);
    this.name=data;
    this.recipedetail.emit(data);
  }

  numbers:number[]=[1,2,3];
  constructor() { }

  ngOnInit() {
  }

}
