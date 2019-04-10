import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Recipes} from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe:Recipes;
   @Output('clickedrecipe') clickedrecipe:EventEmitter<string>= new EventEmitter(); 
  constructor() { }

  thisWasClicked(name:string){
      console.log(name);
      this.clickedrecipe.emit(name);
  }  

  ngOnInit() {
  }

}
