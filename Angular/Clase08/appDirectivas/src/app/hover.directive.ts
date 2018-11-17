import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() colorOriginal: string = "lime"
  @Input() colorHover: string = "purple"

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.saleMouse()
    //this.elementRef.nativeElement.style.backgroundColor = this.colorOriginal
  }

  @HostListener("mouseenter") entraMouse(){
    this.elementRef.nativeElement.style.backgroundColor = this.colorHover
  }

  @HostListener("mouseleave") saleMouse(){
    this.elementRef.nativeElement.style.backgroundColor = this.colorOriginal
  }

}
