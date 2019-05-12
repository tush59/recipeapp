import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Recipes} from '../../recipe.model'
//import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe:Recipes;
   @Input() index:number;
   @Output('clickedrecipe') clickedrecipe:EventEmitter<string>= new EventEmitter();

   constructor(/*private receipeService:RecipeService*/) {

   }

  thisWasClicked(name:string){
      // console.log(name);
      this.clickedrecipe.emit(name);
  }

  // OnSelect(){
  //   console.log(this.recipe);
  //   this.receipeService.recipeSeleted.emit(this.recipe);

  // }

  ngOnInit() {
  }

}
