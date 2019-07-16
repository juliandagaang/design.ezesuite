import { Component, OnInit } from "@angular/core";

@Component({
  selector: "side-dls",
  templateUrl: "./side-dls.component.html"
})
export class SidedlsComponent implements OnInit {
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
  ];
  component = [
    {
      type: "Component",
      name: "Navigations",
      routePath: "/ezesuite/navlinks"
    },
    { type: "Component", name: "Buttons", routePath: "/ezesuite/buttons" },
    {
      type: "Component",
      name: "Form inputs",
      routePath: "/ezesuite/forminputs"
    },
    {
      type: "Component",
      name: "Dropdowns (Beta)",
      routePath: "/ezesuite/dropdowns"
    }
  ];
  primitive = [
    { type: "Primitive", name: "Colour", routePath: "/ezesuite/colours" },
    { type: "Primitive", name: "Font", routePath: "/ezesuite/fonts" },
    { type: "Primitive", name: "Icons", routePath: "/ezesuite/icons" }
  ];
  template = [
    { type: "Template", name: "Forms", routePath: "/ezesuite/formtemplates" },
    { type: "Template", name: "Tables", routePath: "/ezesuite/tabletemplates" },
    { type: "Template", name: "Popouts", routePath: "/ezesuite/popouts" }
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
