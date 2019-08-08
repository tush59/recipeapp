import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {RecipeService} from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
  constructor(private route : ActivatedRoute, private recipeservice : RecipeService,private router: Router) {


   }


   onSubmit(){
      //console.log(this.form.value);
     if(this.editmode){
      // console.log(this.form);
         this.recipeservice.updateRecipe(this.id,this.form.value);

     }else{
       this.recipeservice.addRecipe(this.form.value);
     }

     console.log('submitted here');
     this.onCancel();
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
       'name' : new FormControl(null,[Validators.required]),
        'amount' : new FormControl(1,[Validators.required,Validators.pattern(/^[1-9]\d*(\.\d+)?$/)])
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
              'name': new FormControl(ingredients.name, Validators.required),
              'amount' :  new FormControl(ingredients.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]\d*(\.\d+)?$/)
              ])
          })
          )
        }

       }

    }

      this.form= new FormGroup({
            'name' : new FormControl(name, Validators.required),
            'imagePath' : new FormControl(imagepath,Validators.required),
            'description' : new FormControl(description, Validators.required),
            'ingredients' : this.ingredientArray,
        });


  }

  onCancel(){
        this.router.navigate(["../"],{relativeTo:this.route});
    }
  }


