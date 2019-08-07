import {Recipes} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Http,Headers } from '@angular/http';
@Injectable()
export class RecipeService{

    recipeSeleted: EventEmitter<Recipes>= new EventEmitter();

   private  recipes : Recipes[] = [
    new Recipes('first receipe',
      'recipe description'
    ,'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg',
    [
    new Ingredient('bread',2),
    new Ingredient('egg',5)
    ]
    ),

    new Recipes('second receipe',
    'recipe description',
    'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
    [
      new Ingredient('jam',2),
      new Ingredient('shake',5)
      ]),
    ];

    constructor(private http: Http){

    }

    getRecipe(index: number){
          return this.recipes[index];
    }

    onSelect(recipe :Recipes){

        this.recipeSeleted.emit(recipe);
    }

    getRecipes(){
        return this.recipes.slice();
    }

    saveRecipeOnServer(){
      let headers= new Headers({'Access-Control-Allow-Origin':'*','abc':'bcs'});
     // headers=Headers.append('Access-Control-Allow-Origin','*');

      return  this.http.post('https://apibackend-bb8bb.firebaseio.com/data.json',this.getRecipes(),{headers});
    }


}

