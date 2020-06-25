import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainContentComponent } from "./pages/main-content/main-content.component";
import { RefreshComponent } from "./pages/refresh/refresh.component";

const routes: Routes = [
  { path: "", redirectTo: "/tunisia", pathMatch: "full" },
  { path: ":country", component: MainContentComponent },
  {
    path: "test/refresh",
    component: RefreshComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
