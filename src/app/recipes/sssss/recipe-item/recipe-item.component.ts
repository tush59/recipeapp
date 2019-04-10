import { Component, OnInit, Output, Input } from '@angular/core';
import {Recipes} from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipes;
  constructor() { }

  ngOnInit() {
  }

}
