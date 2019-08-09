import {Component/*, EventEmitter,Output */} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
    //@Output('selectedFeature') selectedFeature:EventEmitter<string>= new EventEmitter();
  // onSelect(feature:string){
  //   this.selectedFeature.emit(feature);
  // }

  constructor(private recipeservice: RecipeService){

  }

  saveData(){
    this.recipeservice.saveRecipeOnServer().subscribe((res)=>{
          console.log(res.json());
    });
  }

  fetchData(){
      this.recipeservice.getRecipesfromServer();
  }
}
