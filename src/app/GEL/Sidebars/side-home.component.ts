import { Component, OnInit } from "@angular/core";

@Component({
  selector: "side-home",
  templateUrl: "./side-home.component.html"
})
export class SidehomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  contenttype = [
    { typename: "Components" },
    { typename: "Primitives" },
    { typename: "Introduction" }
  ];

  intro = [
    { type: "intro", name: "Getting started", routePath: "/home/human" },
    { type: "intro", name: "Design principles", routePath: "/designprinciples" }
    { type: "intro", name: "Team", routePath: "/team" }
  ];
}

/*var accordion = document.getElementsByClassName("side-head");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      //accordion is open,we need to close it
      content.style.maxHeight = null;

    } else {
      //accordion is closed
      content.stlye.maxHeight = content.scrollHeight + "px";
    }
  };
}
*/
