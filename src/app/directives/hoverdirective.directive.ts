import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverdirective]'
})
export class HoverdirectiveDirective {

  constructor(private Elementref: ElementRef) {
    console.log('here');
   }

}
