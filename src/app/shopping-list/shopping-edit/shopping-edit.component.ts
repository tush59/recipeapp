import { Component, OnInit,ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name:ElementRef;
  @ViewChild('amount') amount:ElementRef;
  @Output() shoppingitems:EventEmitter<Ingredient>= new EventEmitter();
  @Output() clearlist:EventEmitter<void>= new EventEmitter();

 // shoppingitem= new Array();
    public Ingredientdata:Ingredient;

  constructor() { }

  ngOnInit() {
  }
  addToList(){
    console.log(this.name.nativeElement.value);
    console.log(this.amount.nativeElement.value);
    //console.log(this.shoppingitem.length+1);
     this.Ingredientdata=new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    //length=this.shoppingitem.length+1;
    //this.shoppingitem[(length)]= new Array('name',this.name.nativeElement.value);
    //this.shoppingitem[(length)]= new Array('amount',this.amount.nativeElement.value);
    this.shoppingitems.emit(this.Ingredientdata);
  }
  clearList(){
    this.clearlist.emit();
  }


}
