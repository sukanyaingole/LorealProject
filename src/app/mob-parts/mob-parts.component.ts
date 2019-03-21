import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styleUrls: ["./mob-parts.component.css"]
})
export class MobPartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  idValue = 1001;

  mobParts = [
    {
      id: this.idValue++,
      name: "Screen 5.5",
      description: "5.5 Screen For Moto g5",
      inStock: 5,
      price: 700,
      isOnline: true,
      stl: "red",
      country: "Australia"
    },
    {
      id: this.idValue++,
      name: "Screen 5",
      description: "5 Screen for Samsung",
      inStock: 8,
      price: 1500,
      isOnline: true,
      stl: "blue",
      country: "India"
    },
    {
      id: this.idValue++,
      name: "key panel",
      description: "Key Panel for Nokia",
      inStock: 10,
      price: 50,
      isOnline: true,
      stl: "teal",
      country: "Germany"
    },
    {
      id: this.idValue++,
      name: "Mobile Cover",
      description: "Moto g5 Mobile Covers",
      inStock: 20,
      price: 250,
      isOnline: true,
      stl: "green",
      country: "India"
    },
    {
      id: this.idValue++,
      name: "Samsung Mobile",
      description: "Samsung Mobile Set",
      inStock: 5,
      price: 1600,
      isOnline: true,
      stl: "hotpink",
      country: "Australia"
    },
    {
      id: this.idValue++,
      name: "Screen 5.5",
      description: "5.5 Screen For Moto g5",
      inStock: 5,
      price: 700,
      isOnline: true,
      stl: "red",
      country: "Australia"
    },
    {
      id: this.idValue++,
      name: "Screen 5",
      description: "5 Screen for Samsung",
      inStock: 8,
      price: 1500,
      isOnline: true,
      stl: "blue",
      country: "India"
    },
    {
      id: this.idValue++,
      name: "key panel",
      description: "Key Panel for Nokia",
      inStock: 10,
      price: 50,
      isOnline: true,
      stl: "teal",
      country: "Germany"
    },
    {
      id: this.idValue++,
      name: "Mobile Cover",
      description: "Moto g5 Mobile Covers",
      inStock: 20,
      price: 250,
      isOnline: true,
      stl: "green",
      country: "India"
    },
    {
      id: this.idValue++,
      name: "Samsung Mobile",
      description: "Samsung Mobile Set",
      inStock: 5,
      price: 1600,
      isOnline: true,
      stl: "hotpink",
      country: "Australia"
    }
  ];
  totalMobileParts() {
    let sum = 0;
    for (let tProducts of this.mobParts) {
      sum += tProducts.inStock;
    }
    return sum;
  }
}
