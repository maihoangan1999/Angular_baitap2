import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap-structural-directive",
  templateUrl: "./baitap-structural-directive.component.html",
  styleUrls: ["./baitap-structural-directive.component.scss"]
})
export class BaitapStructuralDirectiveComponent implements OnInit {
  status: boolean = false;
  p: number = 1;
  danhSachSanPham: any = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 }
  ];

  constructor() {}
  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.status = true;
      this.danhSachSanPham = JSON.parse(localStorage.getItem("user"));
    }
  }
  themSanPham(ma, ten, gia) {
    let sanPham: any = {
      MaSP: ma,
      TenSP: ten,
      Gia: gia
    };

    this.danhSachSanPham.push(sanPham);
    localStorage.setItem("user", JSON.stringify(this.danhSachSanPham));
  }
  xoaSanPham(i: number): void {
    this.danhSachSanPham.splice(i, 1);
    localStorage.setItem("user", JSON.stringify(this.danhSachSanPham));
  }
}
