import {AfterViewInit, Component, TemplateRef, ViewChild} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
  template: ''
})
export abstract class BaseTopic implements AfterViewInit {
  @ViewChild('aide') aideContent?: TemplateRef<unknown>;
  aideBehaviorSubject: BehaviorSubject<TemplateRef<unknown> | undefined> = new BehaviorSubject<TemplateRef<unknown> | undefined>(this.aideContent);
  abstract code: string;

  ngAfterViewInit(): void {
    if (this.aideContent) {
      this.aideBehaviorSubject.next(this.aideContent);
    }
  }
}
