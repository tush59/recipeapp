import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {Recipes} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[];

  // recipes : Recipes[] = [
  // new Recipes('first receipe','recipe description','https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'),
  // new Recipes('second receipe','recipe description','https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg'),

  // ];
   @Output() recipedetail: EventEmitter<Recipes>= new EventEmitter();
    constructor(private recipeService: RecipeService,private route:ActivatedRoute, private router:Router){

    }

    ngOnInit() {
    this.recipeService.recipeUpdated.subscribe((recipe: Recipes[] )=> {
        console.log("event after get request received");
                  this.recipes=recipe;
    });

    this.recipeService.newsubject.subscribe((recipe: Recipes[] )=> {
      console.log("event after get request received");
                this.recipes=recipe;
  });





   this.recipes=this.recipeService.getRecipes();
  }



 // name:Recipes[];
  //recipedata(data){
  // console.log(data);
   // this.name=data;
   // this.recipedetail.emit(data);
    // this.recipedetail.emit(this.recipes);
  //}

  numbers:number[]=[1,2,3];

  onNewRecipe(){
        this.router.navigate(['new'],{relativeTo:this.route});
  }

}
