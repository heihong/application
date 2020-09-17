import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeResolver } from "./home.resolver";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    resolve: {
      data: HomeResolver,
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
