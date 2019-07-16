import { Component, OnInit } from "@angular/core";

@Component({
  selector: "content-foot",
  template: '<div class="content-foot ">    <ng-content ></ng-content>  </div>',
  styleUrls: ["./content.component.scss"]
})
export class ContentfootComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
