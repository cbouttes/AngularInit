import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {Topic} from "./statics/topic";
import {Infos} from "./statics/infos";
import {ExerciceComponent} from "./pages/exercice/exercice.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent}
];

function getTopics(): Routes {
  return Object.values(Topic).filter((v) => !isNaN(Number(v)) && Infos.has(Number(v)))
    .map((_value, index) => {
    const route: Route = {
      path: Infos.getInfo(Number(_value))!.route,
      component: ExerciceComponent,
      data: {topic: _value},
      children: Infos.getChildren(Number(_value))
    };
    return route;
  });
}

function getRoutes(): Routes {
  routes.push(...getTopics());
  return routes;
}

@NgModule({
  imports: [RouterModule.forRoot(getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
