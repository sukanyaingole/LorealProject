import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor() {}
  image1 = "assets/images/middle-image.jpg";

  categories = [
    {
      catName: "Makeup",
      catImage: "assets/images/makeup.jpg",
      productList: ["EYES", "FACE", "LIP", "NAILS", "MAKEUP", "TOOLS"]
    },
    {
      catName: "Skin Care",
      catImage: "assets/images/skincare1.jpg",
      productList: ["SERUM", "SUN SCREEN", "CLEANSER", "SCRUB", "TONER"]
    },
    {
      catName: "Hair Color",
      catImage: "assets/images/haircolor.jpg",
      productList: ["PERMANENT", "SEMI-PERMANENT", "TEMPORARY"]
    },
    {
      catName: "Hair Care",
      catImage: "assets/images/haircare.jpg",
      productList: ["SHAMPOO", "CONDITIONER", "OIL-IN-CREAM", "SERUM", "MASQUE"]
    },
    {
      catName: "L'Oréal Men",
      catImage: "assets/images/male.jpg",
      productList: ["MOISTURIZER", "CLEANSER", "SCRUB", "MASQUE"]
    },
    {
      catName: "Tutorials",
      catImage: "assets/images/tuto.jpg",
      productList: ["Hair Color", "Makeup"]
    }
  ];

  ngOnInit() {}
}
