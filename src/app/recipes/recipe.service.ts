import {Recipes} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';


import { Subject } from 'rxjs';


import { Http, Headers } from '@angular/http';
@Injectable()

export class RecipeService {

    recipeSeleted: EventEmitter<Recipes> = new EventEmitter();
    recipeUpdated = new Subject();
    newsubject = new Subject();
   private  recipes: Recipes[] = [
    new Recipes('first receipe',
      'recipe description'
    , 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg',
    [
    new Ingredient('bread', 2),
    new Ingredient('egg', 5)
    ]
    ),

    new Recipes('second receipe',
    'recipe description',
    'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
    [
      new Ingredient('jam', 2),
      new Ingredient('shake', 5)
      ]),
    ];

    constructor(private http: Http) {

    }

    getRecipe(index: number) {
          return this.recipes[index];
    }

    onSelect(recipe: Recipes) {
        this.recipeSeleted.emit(recipe);
    }

    getRecipes() {
        return this.recipes;
    }


    addRecipe(recipe: Recipes) {
          this.recipes.push(recipe);
          console.log(this.recipes);
          this.recipeUpdated.next(this.recipes.slice());
    }
    async saveRecipeOnServer() {
      await this.deletefromserver().then(arg => {
        console.log('deleted');
        console.log(arg);
  });
      const headers = new Headers({'Access-Control-Allow-Origin': '*'});
      console.log('after await');
      return  this.http.post('https://apibackend-bb8bb.firebaseio.com/data.json', this.getRecipes(), {headers}).toPromise();
    }

    getRecipesfromServer() {


      this.http.get('https://apibackend-bb8bb.firebaseio.com/data.json').subscribe(
        (res) => {
          const arr: any = res.json();
          const keysArray: Array<any> = [];
          let i=0;
          for (const  keys in  arr  ) {
            keysArray[i++] = keys;
          }
          console.log(keysArray);
          i=0;
          console.log(arr[keysArray[i++]]);
          for(let key of keysArray){
              for (let objct of arr[key]){
                this.recipes.push(objct);
              }
              this.newsubject.next(this.recipes);
          }

          });
        }




    updateRecipe(index: number , recipe: Recipes) {
      this.recipes[index] = recipe;
      this.recipeUpdated.next(this.recipes.slice());
    }


    deleteRecipe(index: number) {

      this.recipes.splice(index, 1);
      this.recipeUpdated.next(this.recipes.slice());

    }

     deletefromserver(){
      return  this.http.delete('https://apibackend-bb8bb.firebaseio.com/data.json').toPromise();
    }

}

