import { Component, OnInit,ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name:ElementRef;
  @ViewChild('amount') amount:ElementRef;
 // @Output() shoppingitems:EventEmitter<Ingredient>= new EventEmitter();
   @ViewChild('aform') aform: NgForm;
   @Output() clearlist:EventEmitter<void>= new EventEmitter();

 // shoppingitem= new Array();
    public Ingredientdata:Ingredient;
    editMode:boolean =false;
    editIndex:number =-1;
     classswitch=false;

     constructor(private slservice:ShoppingListService) {

      }

  ngOnInit() {
    this.slservice.idSelected.subscribe((id: number)=>{
      let temp: Ingredient;
      temp=this.slservice.getIngredientById(id);
      this.editIndex=id;
      this.editMode=true;
      this.aform.setValue({
          name: temp.name,
          amount: temp.amount
      });
     });
  }
  addToList(){
    console.log(this.name.nativeElement.value);
    console.log(this.amount.nativeElement.value);
     this.classswitch=!this.classswitch;
    //console.log(this.shoppingitem.length+1);
     this.Ingredientdata=new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    //length=this.shoppingitem.length+1;
    //this.shoppingitem[(length)]= new Array('name',this.name.nativeElement.value);
    //this.shoppingitem[(length)]= new Array('amount',this.amount.nativeElement.value);
   // this.shoppingitems.emit(this.Ingredientdata);
     this.slservice.addIngredient(this.Ingredientdata);
  }
  clearList(){
    this.clearlist.emit();
    this.editMode=false;
    this.aform.reset();
  }
  onAddItem(form:NgForm){
    let value =form.value;
    this.Ingredientdata=new Ingredient(value.name,value.amount);
    if(this.editMode){
        this.slservice.updateIngredient(this.editIndex,this.Ingredientdata);
    }else{
        this.slservice.addIngredient(this.Ingredientdata);
    }
    this.editMode=false;
    form.reset();
  }

  deleteItem(){
    console.log(this.editIndex);
    this.slservice.deleteItem(this.editIndex);
    this.editMode=false;
    this.aform.reset();
  }
}
