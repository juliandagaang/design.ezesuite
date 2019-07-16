import { Component, OnInit, ViewChild, HostListener } from "@angular/core";

@Component({
  selector: "navlink-view",
  templateUrl: "./navlink.component.html"
})
export class NavlinkComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  viewMode = "apple";
  viewSide = "monkey";
  viewTab = "sampaguita";
}
