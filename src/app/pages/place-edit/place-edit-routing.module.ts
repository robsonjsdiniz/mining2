import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceEditComponent } from './place-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceEditRoutingModule { }
