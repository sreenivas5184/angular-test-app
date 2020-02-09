import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective implements OnInit {

  @Input('appStructuralDirective')
  cond: boolean;
  constructor(
    private temRef: TemplateRef<any>,
    private viewConRef: ViewContainerRef
  ) { }
  ngOnInit(): void {
    if (!this.cond) {
      this.viewConRef.createEmbeddedView(this.temRef);
    } else {
      this.viewConRef.clear();
    }
  }
}
