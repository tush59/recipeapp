import { Component, OnInit } from '@angular/core';
import {Recipes} from './recipe.model'
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService],
})
export class RecipesComponent implements OnInit {

  constructor(private recipeservice:RecipeService) { }
   detailsreceived:Recipes;
  /*detailsreceived(data:Recipes){

  }*/

  ngOnInit() {
        this.recipeservice.recipeSeleted.subscribe(
            (recipe:Recipes)=>{
              console.log("here");
                    this.detailsreceived=recipe;
          }
        );
  }

}
