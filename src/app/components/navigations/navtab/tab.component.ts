import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sidescroll",
  template: '<div class="tab-ctn"><ng-content></ng-content></div>'
})
export class TabComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
