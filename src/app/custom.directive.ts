import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @Input('appCustom')
  @HostBinding('style.width.px')
  private width: number;
  constructor(private ef: ElementRef,
              private ren: Renderer2
    ) {
    // ef.nativeElement.style.backgroundColor = 'skyblue';
    // ef.nativeElement.style.color = 'white';
    // ren.setStyle(ef.nativeElement , 'backgroundColor' , 'skyblue');
    // this.width = 600;
   }

   @HostListener('mouseenter')
   onEnter() {
    this.width = 600;
   }

   @HostListener('mouseleave')
   onLeave() {
    this.width = 150;
   }

}
