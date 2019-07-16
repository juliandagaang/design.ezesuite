import { Component, OnInit } from "@angular/core";

@Component({
  selector: "grid",
  template: '<div class=" "><ng-content></ng-content></div>',
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
