import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { SidepanelComponent } from "./components/navigations/navside/sidepanel.component";
import { SidescrollComponent } from "./components/navigations/navside/sidescroll.component";
import { ContentComponent } from "./components/content/content.component";
import { ContentbodyComponent } from "./components/content/contentbody.component";
import { ContentfootComponent } from "./components/content/contentfooter.component";
import { ContentheadComponent } from "./components/content/contenthead.component";
import { GridComponent } from "./grid/grid.component";

import { CodectnComponent } from "./components/code/code.component";
import { IloComponent } from "./components/code/ilo.component";
import { IlofootComponent } from "./components/code/ilo-foot.component";
import { IloheadComponent } from "./components/code/ilo-head.component";
import {
  ButtonMajor,
  ButtonMinor,
  ButtonBasic,
  ButtonMajorLarge,
  ButtonMinorLarge,
  ButtonBasicLarge,
  ButtonMajorSmall,
  ButtonMinorSmall,
  ButtonBasicSmall
} from "./components/buttons/button.directive";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidepanelComponent,
    SidescrollComponent,
    ContentComponent,
    ContentbodyComponent,
    ContentfootComponent,
    ContentheadComponent,
    GridComponent,

    CodectnComponent,
    IloComponent,
    IlofootComponent,
    IloheadComponent,

    ButtonMajor,
    ButtonMinor,
    ButtonBasic,

    ButtonMajorLarge,
    ButtonMinorLarge,
    ButtonBasicLarge,

    ButtonMajorSmall,
    ButtonMinorSmall,
    ButtonBasicSmall
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
