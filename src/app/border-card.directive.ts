import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[addBorderCard]'  
})
export class BorderCardDirective {

  //private initialColor: string = 'pink';  
  private defaultColor: string = '#f5f5f5';
  private defaulHeight: number = 190;
  

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaulHeight);
    this.setBorder(this.defaultColor);
  }

  @Input('addBorderCard') borderColor : string; //avec alias
  //@Input('addBorderCard') borderHeight : any; //avec alias
  //@Input('addBordercard') borderSize : number;
  //@Input('addBordercard') borderStyle : string;
  

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder("#009688");  
    //this.setHeight(this.borderHeight)         
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('transparent');          
  }

  private setBorder(color: string) {
    const border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  } 

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
