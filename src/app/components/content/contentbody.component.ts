import { Component, OnInit } from "@angular/core";

@Component({
  selector: "content-body",
  template: '<div class="content-body"><ng-content></ng-content></div>',
  styleUrls: ["./content.component.scss"]
})
export class ContentbodyComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
