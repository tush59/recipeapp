import { NgModule } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';


const route:Routes=[
  {path:'', redirectTo:'/recipe' , pathMatch:'full' },

  {path:'recipe',component: RecipesComponent, 'children':[
    {path:'',component:RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent},

  ] },
  {path:'shopping-list', component: ShoppingListComponent },
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({

 imports:[ RouterModule.forRoot(route,{useHash:true}) ],
 exports: [RouterModule]
})



export class AppRoutingModule {

}
