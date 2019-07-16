import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tabletrash-page",
  templateUrl: "./tabletrash.component.html"
})
export class TabletrashComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public currentCompany;

  public selectCompany(event: any, item: any) {
    this.currentCompany = users.Name;
  }

  users = [
    {
      Name: "Kadeem",
      Role: "Placerat Orci Industries",
      Email: "metus.vitae@ultriciessemmagna.co.uk",
      Contact: "(06) 3711 0054"
    },
    {
      Name: "Joel",
      Role: "Non Consulting",
      Email: "sit.amet.risus@imperdietnecleo.ca",
      Contact: "(05) 3143 6153"
    },
    {
      Name: "Lucian",
      Role: "Ante PC",
      Email: "adipiscing@et.com",
      Contact: "(02) 9616 2679"
    },
    {
      Name: "Ferris",
      Role: "Eu Erat LLC",
      Email: "eros@ipsumSuspendisse.com",
      Contact: "(01) 2084 7103"
    }
  ];
}
