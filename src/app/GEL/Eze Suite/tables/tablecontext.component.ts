import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tablecontext-page",
  templateUrl: "./tablecontext.component.html"
})
export class TablecontextComponent implements OnInit {
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
    },
    {
      Name: "Jermaine",
      Role: "Imperdiet Ullamcorper Duis LLP",
      Email: "est@iaculisneceleifend.co.uk",
      Contact: "(05) 7618 9031"
    },
    {
      Name: "Ali",
      Role: "Dui Cras Consulting",
      Email: "euismod@sed.edu",
      Contact: "(09) 2070 8048"
    },
    {
      Name: "Victor",
      Role: "Parturient Montes Institute",
      Email: "Sed.molestie@enimSednulla.com",
      Contact: "(03) 9973 2963"
    },
    {
      Name: "Stuart",
      Role: "Malesuada Malesuada LLC",
      Email: "risus@egestasAliquam.com",
      Contact: "(06) 0461 1365"
    },
    {
      Name: "Brent",
      Role: "In Cursus Et Corporation",
      Email: "sed.tortor.Integer@nibhDonec.edu",
      Contact: "(08) 5555 7725"
    }
  ];
}
