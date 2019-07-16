import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "content-area",
  template: '<div class="content-area"><ng-content></ng-content></div>',
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  @Input() pagetitle: string;

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
