import { Component, OnInit } from "@angular/core";

@Component({
  selector: "<ilo-head>",
  template: '<div class="ilo-head"><ng-content></ng-content></div>',
  styleUrls: ["./code.component.scss"]
})
export class IloheadComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
