import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceEditComponent } from './place-edit.component';
import { PlaceEditRoutingModule } from './place-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PlaceEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PlaceEditComponent
  ]
})
export class PlaceEditModule { }
