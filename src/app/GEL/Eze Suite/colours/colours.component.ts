import { Component, OnInit } from "@angular/core";

@Component({
  selector: "colours-page",
  templateUrl: "./colours.component.html"
})
export class ColoursComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  grey = [
    {
      colour_name: "$ez-charcoal",
      colour_hex: "#343434",
      colour_hsl: "hsl(0, 0%, 20%)",
      colour_rgb: "rgb(52, 52, 52)"
    },
    {
      colour_name: "$ez-mud",
      colour_hex: "#7D7D7D",
      colour_hsl: "hsl(0, 0%, 49%)",
      colour_rgb: "rgb(125, 125, 125)",
      colour_type: "Action links"
    },
    {
      colour_name: "$ez-rock",
      colour_hex: "#D0D0D0",
      colour_hsl: "hsl(0, 0%, 82%)",
      colour_rgb: "rgb(208, 208, 208)",
      colour_type: "Form border"
    },
    {
      colour_name: "$ez-silver",
      colour_hex: "#E6E6E6",
      colour_hsl: "hsl(0, 0%, 90%)",
      colour_rgb: "rgb(230, 230, 230)",
      colour_type: "Border color"
    },
    {
      colour_name: "$ez-ash",
      colour_hex: "#ECECEC",
      colour_hsl: "hsl(0, 0%, 93%)",
      colour_rgb: "rgb(236, 236, 236)",
      colour_type: "Background"
    },
    {
      colour_name: "$ez-fog",
      colour_hex: "#F9F9F9",
      colour_hsl: "hsl(0, 0%, 98%)",
      colour_rgb: "rgb(249, 249, 249)",
      colour_type: "Supplemental"
    }
  ];

  status = [
    {
      colour_name: "$ez-status-red",
      colour_hex: "#D8484E",
      colour_hsl: "hsl(358, 65%, 56%)",
      colour_rgb: "rgb(216, 72, 78)"
    },
    {
      colour_name: "$ez-status-green",
      colour_hex: "#35B255",
      colour_hsl: "hsl(135, 54%, 45%)",
      colour_rgb: "rgb(53, 178, 85)"
    },
    {
      colour_name: "$ez-mud",
      colour_hex: "#7D7D7D",
      colour_hsl: "hsl(0, 0%, 49%)",
      colour_rgb: "rgb(125, 125, 125)",
      colour_type: "Action links"
    }
  ];

  blue = [
    {
      colour_name: "$ez-dark-blue",
      colour_hex: "#009cf7",
      colour_hsl: "hsl(202,100%,48%)",
      colour_rgb: "rgb(0,156,247)"
    },
    {
      colour_name: "$ez-blue",
      colour_hex: "#00acff",
      colour_hsl: "hsl(200,100%,50%)",
      colour_rgb: "rgb(0,172,255)",
      colour_type: "Primary"
    },
    {
      colour_name: "$ez-light-blue",
      colour_hex: "#def1fe",
      colour_hsl: "hsl(204,94%,93%)",
      colour_rgb: "rgb(222,241,254)",
      colour_type: "Supplemental"
    }
  ];
  purple = [
    {
      colour_name: "$ez-dark-purple",
      colour_hex: "#052A68",
      colour_hsl: "hsl(218, 91%, 21%)",
      colour_rgb: "rgb(5, 42, 104)",
      colour_type: ""
    },
    {
      colour_name: "$ez-purple",
      colour_hex: "#1A4A90",
      colour_hsl: "hsl(216, 69%, 33%)",
      colour_rgb: "rgb(26, 74, 144)",
      colour_type: "Primary"
    },
    {
      colour_name: "$ez-light-purple",
      colour_hex: "#F3F6F9",
      colour_hsl: "hsl(210, 33%, 96%)",
      colour_rgb: "rgb(243, 246, 249)",
      colour_type: ""
    }
  ];
  green = [
    {
      colour_name: "$ez-dark-green",
      colour_hex: "#498403",
      colour_hsl: "hsl(87, 96%, 26%)",
      colour_rgb: "rgb(73, 132, 3)",
      colour_type: ""
    },
    {
      colour_name: "$ez-green",
      colour_hex: "#57a000",
      colour_hsl: "hsl(87, 100%, 31%)",
      colour_rgb: "rgb(87, 160, 0)",
      colour_type: "Primary"
    },
    {
      colour_name: "$ez-light-green",
      colour_hex: "#f6faf2",
      colour_hsl: "hsl(90, 44%, 96%)",
      colour_rgb: "rgb(246, 250, 242)",
      colour_type: ""
    }
  ];
  orange = [
    {
      colour_name: "$ez-dark-orange",
      colour_hex: "#d25b1e",
      colour_hsl: "hsl(20, 75%, 47%)",
      colour_rgb: "rgb(210, 91, 30)",
      colour_type: ""
    },
    {
      colour_name: "$ez-orange",
      colour_hex: "#ed7537",
      colour_hsl: "hsl(20, 83%, 57%)",
      colour_rgb: "rgb(237, 117, 55)",
      colour_type: "Primary"
    },
    {
      colour_name: "$ez-light-orange",
      colour_hex: "#fef8f5",
      colour_hsl: "hsl(20, 82%, 98%)",
      colour_rgb: "rgb(254, 248, 245)",
      colour_type: ""
    }
  ];
}
