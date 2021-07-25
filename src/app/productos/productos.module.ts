import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';





@NgModule({
  declarations:
  [
    BuscarComponent,
    ProductoComponent,
    HomeComponent,
    ListadoComponent
  ],
    
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ProductosModule { }
