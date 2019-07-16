import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";


@Component({
  selector: "formbasic-page",
  templateUrl: "./formbasic.component.html"
})
export class FormbasicComponent implements OnInit {


  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  ngOnInit() { }
