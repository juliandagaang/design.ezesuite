import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HumanComponent } from "./human/human.component";
import { HeaderComponent } from "./header/header.component";

import { NavlinkComponent } from "./GEL/Eze Suite/navlinks/navlink.component";
import { ButtonpageComponent } from "./GEL/Eze Suite/buttons/buttons.component";
import { HomeComponent } from "./GEL/Home/home.component";
import { SidedlsComponent } from "../app/GEL/Sidebars/side-dls.component";
import { SidehomeComponent } from "../app/GEL/Sidebars/side-home.component";
import { EzeSuiteComponent } from "./GEL/Eze Suite/ezesuite.component";
import { FormsComponent } from "./GEL/Eze Suite/forminputs/forminputs.component";
import { FormtemplateComponent } from "./GEL/Eze Suite/form-templates/formtemplates.component";
import { FormbasicComponent } from "./GEL/Eze Suite/form-templates/formbasic.component";
import { FormgroupsComponent } from "./GEL/Eze Suite/form-templates/formgroups.component";
import { FormcomplexComponent } from "./GEL/Eze Suite/form-templates/formcomplex.component";
import { TablebasicComponent } from "./GEL/Eze Suite/tables/tablebasic.component";
import { TablecontextComponent } from "./GEL/Eze Suite/tables/tablecontext.component";
import { TabletemplateComponent } from "./GEL/Eze Suite/tables/tabletemplate.component";
import { ColoursComponent } from "./GEL/Eze Suite/colours/colours.component";
import { TablegroupComponent } from "./GEL/Eze Suite/tables/tablegroup.component";
import { PopoutComponent } from "./GEL/Eze Suite/popouts/popout.component";
import { DropdownsComponent } from "./GEL/Eze Suite/dropdowns/dropdowns.component";
import { TablesearchComponent } from "./GEL/Eze Suite/tables/tablesearch.component";
import { TableemptyComponent } from "./GEL/Eze Suite/tables/tableempty.component";
import { TabletrashComponent } from "./GEL/Eze Suite/tables/tabletrash.component";
import { FontsComponent } from "./GEL/Eze Suite/fonts/fonts.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/ezesuite/buttons(sidebar:sidedls)",
    pathMatch: "full"
  },
  { path: "sidedls", component: SidedlsComponent, outlet: "sidebar" },
  { path: "sidehome", component: SidehomeComponent, outlet: "sidebar" },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "ezesuite",
    component: EzeSuiteComponent,
    children: [
      { path: "", redirectTo: "buttons", pathMatch: "full" },
      { path: "buttons", component: ButtonpageComponent },
      { path: "navlinks", component: NavlinkComponent },
      { path: "forminputs", component: FormsComponent },
      { path: "formtemplates", component: FormtemplateComponent },
      { path: "formbasic", component: FormbasicComponent },
      { path: "formgroups", component: FormgroupsComponent },
      { path: "formcomplex", component: FormcomplexComponent },
      { path: "tablebasic", component: TablebasicComponent },
      { path: "tablecontext", component: TablecontextComponent },
      { path: "tabletemplates", component: TabletemplateComponent },
      { path: "colours", component: ColoursComponent },
      { path: "tablegroup", component: TablegroupComponent },
      { path: "popouts", component: PopoutComponent },
      { path: "dropdowns", component: DropdownsComponent },
      { path: "tablesearch", component: TablesearchComponent },
      { path: "tableempty", component: TableemptyComponent },
      { path: "tabletrash", component: TabletrashComponent },
      { path: "fonts", component: FontsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HumanComponent,
  HeaderComponent,
  SidedlsComponent,
  NavlinkComponent,
  ButtonpageComponent,
  HomeComponent,
  EzeSuiteComponent,
  SidehomeComponent,
  FormsComponent,
  FormtemplateComponent,
  FormbasicComponent,
  FormgroupsComponent,
  FormcomplexComponent,
  TablebasicComponent,
  TablecontextComponent,
  TabletemplateComponent,
  ColoursComponent,
  TablegroupComponent,
  PopoutComponent,
  DropdownsComponent,
  TablesearchComponent,
  TableemptyComponent,
  TabletrashComponent,
  FontsComponent
];
