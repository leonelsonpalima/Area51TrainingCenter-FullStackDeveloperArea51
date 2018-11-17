import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDistritos]'
})
export class DistritosDirective {
  @Input('appDistritos') lista: Array<string> = []

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {



    this.lista.forEach(item => {

      const option = this.renderer.createElement('option')
      const texto = this.renderer.createText(item)
      this.renderer.appendChild(option, texto)

      this.renderer.appendChild(this.elementRef.nativeElement, option)

    })
  }

}
