import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeapp';
  feature: string;
  onNavigate(feature:string){
    this.feature=feature;
  }

}
