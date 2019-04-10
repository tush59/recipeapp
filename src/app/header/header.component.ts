import {Component, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output('selectedFeature') selectedFeature:EventEmitter<string>= new EventEmitter();
  onSelect(feature:string){
    this.selectedFeature.emit(feature);
  }

}
