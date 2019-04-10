import { Component, OnInit } from '@angular/core';
import {Recipes} from './recipe.model'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }
   detailsreceived:Recipes;
  /*detailsreceived(data:Recipes){

  }*/

  ngOnInit() {
  }

}
