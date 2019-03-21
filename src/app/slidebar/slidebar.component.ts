import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slidebar",
  templateUrl: "./slidebar.component.html",
  styleUrls: ["./slidebar.component.css"]
})
export class SlidebarComponent implements OnInit {
  constructor() {}
  slideImg1 = "./assets/images/loreal.jpg";
  slideImg2 = "./assets/images/right-image.jpg";
  slideImg3 = "./assets/images/right-image.jpg";
  slideImg4 = "./assets/images/right-image.jpg";
  ngOnInit() {}
}
