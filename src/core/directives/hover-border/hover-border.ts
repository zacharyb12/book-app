import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HoverBorder]'
})
export class HoverBorder {

  constructor(
    private el : ElementRef,
    private re : Renderer2
  ) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.re.setStyle(this.el.nativeElement, 'border', '2px solid red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.re.removeStyle(this.el.nativeElement, 'border');
  }

}
