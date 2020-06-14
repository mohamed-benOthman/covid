import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from "./components/card/card.component";
import { MainContentComponent } from "./pages/main-content/main-content.component";
import { LineChartComponent } from "./components/line-chart/line-chart.component";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { RefreshComponent } from './pages/refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    CardComponent,
    MainContentComponent,
    LineChartComponent,
    RefreshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
