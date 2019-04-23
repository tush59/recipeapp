import { Component, OnInit, Input } from '@angular/core';
import {Recipes} from '../recipe.model';
import {DropdownDirective} from '../../shared/dropdown.directive';
import {ShoppingListService} from '../../shopping-list/shoppinglist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') recipe:Recipes;
  constructor( private slservice:ShoppingListService) { }

  ngOnInit() {
  }

  onSelect(){
    //console.log(this.recipe.ingredients);
    this.slservice.addToShoppingList(this.recipe.ingredients);
  }

}
