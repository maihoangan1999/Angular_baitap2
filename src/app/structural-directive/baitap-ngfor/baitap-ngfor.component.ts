import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap-ngfor",
  templateUrl: "./baitap-ngfor.component.html",
  styleUrls: ["./baitap-ngfor.component.scss"]
})
export class BaitapNgforComponent implements OnInit {
  danhSachSanpham: any = [];
  constructor() {}
  ngOnInit() {}
  layGiaTri(ma, ten, gia) {
    let sanPham: any = {
      maSP: ma,
      tenSP: ten,
      giaSP: gia
    };
    this.danhSachSanpham.push(sanPham);
  }
}
