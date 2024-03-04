import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GrigliaComponent} from "./griglia/griglia.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    component: GrigliaComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
