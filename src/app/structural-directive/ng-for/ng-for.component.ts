import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.scss"]
})
export class NgForComponent implements OnInit {
  danhSachNhanVien: any = [
    { ten: "an", tuoi: 18 },
    { ten: "khang", tuoi: 19 },
    { ten: "thinh", tuoi: 20 },
    { ten: "vuong", tuoi: 21 }
  ];

  constructor() {}
  ngOnInit() {}
}
