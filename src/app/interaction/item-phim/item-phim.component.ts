import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
//output , eventemitter di cung
@Component({
  selector: "app-item-phim",
  templateUrl: "./item-phim.component.html",
  styleUrls: ["./item-phim.component.scss"]
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;
  @Output() suKienPhim = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  like() {
    this.suKienPhim.emit(this.phim);
  }
}
