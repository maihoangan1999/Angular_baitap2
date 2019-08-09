import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-onway-binding",
  templateUrl: "./onway-binding.component.html",
  styleUrls: ["./onway-binding.component.scss"]
})
export class OnwayBindingComponent implements OnInit {
  name: string = "Cybersoft";
  constructor() {}

  ngOnInit() {}

  eventBinding(value) {
    console.log(value);
  }
}
