import { Component } from "@angular/core";
import {
  trigger,
  style,
  state,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.scss"],
  animations: [
    trigger("slideright", [
      state("void", style({ marginLeft: "-300px" })),

      transition("void => *", [
        animate("200ms ease-in", style({ marginLeft: 0 }))
      ]),
      transition("* => void", [
        animate("200ms", style({ marginLeft: "-300px" }))
      ])
    ]),
    trigger("longfade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = "Eze Suite DLS";
}
