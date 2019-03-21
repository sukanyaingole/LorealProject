import { Component, OnInit } from "@angular/core";
import { ProductComponentDeclaration } from "./component-declaration";
import { PRODCOMPONENT } from "./component-validation";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  mobile: ProductComponentDeclaration[];

  ngOnInit() {
    this.mobile = PRODCOMPONENT;
  }
}
