import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";


@Component({
  selector: "formcomplex-page",
  templateUrl: "./formcomplex.component.html"
})
export class FormcomplexComponent implements OnInit {

  viewTab = "general";
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  ngOnInit() { }
