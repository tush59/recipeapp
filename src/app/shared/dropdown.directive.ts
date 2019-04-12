import { Directive,OnInit, HostListener, ElementRef, Renderer, HostBinding } from "@angular/core";

@Directive({
      selector:'[dropdowndirective]',
})

export class DropdownDirective implements OnInit{
  @HostBinding('class.open') togglevar:boolean=false;

  constructor(private elRef: ElementRef, private renderer : Renderer){
      console.log("here");
  }
    ngOnInit(){

    }

    @HostListener ('click') click(eventData : Event){
           this.togglevar=!this.togglevar;
           // this.renderer.setElementClass(this.elRef.nativeElement,'open',this.togglevar); // my solution
    }
}
