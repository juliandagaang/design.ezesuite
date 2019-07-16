import { Component, OnInit } from "@angular/core";

@Component({
  selector: "<ilo>",
  template: '<div class="ilo"><ng-content></ng-content></div>',
  styleUrls: ["./code.component.scss"]
})
export class IloComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
