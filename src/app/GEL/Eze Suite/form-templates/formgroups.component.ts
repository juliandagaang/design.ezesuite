import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";


@Component({
  selector: "formgroups-page",
  templateUrl: "./formgroups.component.html"
})
export class FormgroupsComponent implements OnInit {


  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  ngOnInit() { }
