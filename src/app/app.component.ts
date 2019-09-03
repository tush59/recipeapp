import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'recipeapp';
  feature: string='recipe';
  onNavigate(feature:string){
    this.feature=feature;
  }

}
