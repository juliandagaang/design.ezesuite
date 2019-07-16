import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "<cd>",
  template:
    '<div><span class="ot">{{param}}</span> <ng-content></ng-content> <span class="ct">{{paramend}}</span></div>',
  styleUrls: ["./code.component.scss"]
})
export class CodectnComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  @Input() param: string;
  @Input() paramend: string;

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
