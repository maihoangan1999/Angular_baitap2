import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHightLight]"
})
export class HightLightDirective {
  constructor(private ele: ElementRef, private render: Renderer2) {
    this.ele.nativeElement.style.backgroundColor = "red";
    this.render.setStyle(this.ele.nativeElement, "background-color", "green");
  }
}
