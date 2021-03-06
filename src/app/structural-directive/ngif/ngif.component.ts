import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngif",
  templateUrl: "./ngif.component.html",
  styleUrls: ["./ngif.component.scss"]
})
export class NgifComponent implements OnInit {
  status: boolean = false;
  statusLogin: boolean = true;
  constructor() {}

  ngOnInit() {}

  show() {
    this.status = true;
  }

  hidden() {
    this.status = false;
  }

  dangXuat() {
    this.statusLogin = false;
  }

  dangNhap() {
    this.statusLogin = true;
  }
}
