import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StructuralDirectiveComponent } from "./structural-directive.component";
import { NgifComponent } from "./ngif/ngif.component";
import { BaitapNgifComponent } from "./baitap-ngif/baitap-ngif.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { BaitapNgforComponent } from "./baitap-ngfor/baitap-ngfor.component";
import { BaitapStructuralDirectiveComponent } from "./baitap-structural-directive/baitap-structural-directive.component";

@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    NgifComponent,
    BaitapNgifComponent,
    NgSwitchComponent,
    NgForComponent,
    BaitapNgforComponent,
    BaitapStructuralDirectiveComponent
  ],
  exports: [StructuralDirectiveComponent],
  imports: [CommonModule]
})
export class StructuralDirectiveModule {}
