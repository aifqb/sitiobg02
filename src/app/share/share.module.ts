import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HablanosComponent } from './hablanos/hablanos.component';
import { RedesComponent } from './redes/redes.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HablanosComponent,
  ],
  exports:[
    HablanosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ShareModule { }
