import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective implements OnInit{
@Input() color: string = 'red';
  constructor(private vcr: ViewContainerRef,private localTemplate: TemplateRef<string>,private elemRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.elemRef.nativeElement)
    this.vcr.createEmbeddedView(this.localTemplate)
  }

}
