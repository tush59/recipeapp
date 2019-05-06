import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {RecipeService} from '../recipe.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id :number;
  editmode: Boolean=true;
  form: FormGroup;
  ingredientArray= new FormArray([]);
  constructor(private route : ActivatedRoute, private recipeservice : RecipeService) {


   }

  ngOnInit() {

    this.route.params.subscribe( (param: Params) => {
        this.id= +param['id'];
        this.editmode= param['id']!=null;
        this.onInit();

    });
  }

   addingredient(){

    ( <FormArray> this.form.get('ingredients')).push(
      new FormGroup({
       'name' : new FormControl(),
        'amount' : new FormControl()
      })
    );

  }

  onInit(){

    let name ='';
    let imagepath='';
    let description='';

    if(this.editmode){
      let data= this.recipeservice.getRecipe(this.id);
      name=data.name;
      imagepath= data.imagePath;
      description= data.description;
       if(data['ingredients']){
        for ( let ingredients of data.ingredients){
          this.ingredientArray.push(new FormGroup({
              'name': new FormControl(ingredients.name),
              'amount' :  new FormControl(ingredients.amount)
          })
          )
        }

       }
    }

      this.form= new FormGroup({
            'name' : new FormControl(name),
            'imagepath' : new FormControl(imagepath),
            'description' : new FormControl(description),
            'ingredients' : this.ingredientArray,
        });


  }

}
