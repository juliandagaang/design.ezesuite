import { Component, OnInit } from "@angular/core";

@Component({
  selector: "<ilo-foot>",
  template: '<div class="ilo-foot"><ng-content></ng-content></div>',
  styleUrls: ["./code.component.scss"]
})
export class IlofootComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
