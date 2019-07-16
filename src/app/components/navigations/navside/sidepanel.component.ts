import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "sidepanel",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidepanel.scss"]
})
export class SidepanelComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  @Input() title: string;

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
