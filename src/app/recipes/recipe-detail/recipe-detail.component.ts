import { Component, OnInit, Input } from '@angular/core';
import {Recipes} from '../recipe.model';
import {DropdownDirective} from '../../shared/dropdown.directive';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') recipe:Recipes;
  constructor() { }

  ngOnInit() {
  }


}
