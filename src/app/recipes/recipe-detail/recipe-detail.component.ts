import { Component, OnInit, Input } from '@angular/core';
import {Recipes} from '../recipe.model';
import {DropdownDirective} from '../../shared/dropdown.directive';
import {ShoppingListService} from '../../shopping-list/shoppinglist.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 // @Input('recipe') recipe:Recipes;
       recipe:Recipes;
       id: number;
  constructor( private slservice:ShoppingListService, private recipeService:RecipeService, private route: ActivatedRoute) {
      this.route.params.subscribe((params: Params)=>{
          this.id=+params['id'];
          this.recipe=this.recipeService.getRecipe(this.id);
      });
   }

  ngOnInit() {



  }



  onSelect(){
    //console.log(this.recipe.ingredients);
    this.slservice.addToShoppingList(this.recipe.ingredients);
  }

}
