import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sidescroll",
  template: '<div class="sidescroll"><ng-content></ng-content></div>',
  styleUrls: ["./sidepanel.scss"]
})
export class SidescrollComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
