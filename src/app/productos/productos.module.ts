import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductoTablaComponent } from './components/producto-tabla/producto-tabla.component';
import { ProductoSeachComponent } from './components/producto-seach/producto-seach.component';





@NgModule({
  declarations:
  [
    BuscarComponent,
    ProductoComponent,
    HomeComponent,
    ListadoComponent,
    CategoriaComponent,
    ProductoTablaComponent,
    ProductoSeachComponent
  ],
    
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductosModule { }
