import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugaresComponent } from './lugares/lugares.component';


@NgModule({
  declarations: [
    LugaresComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ReactiveFormsModule
  ]
})
export class LugaresModule { }
