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
import { InfoproductosComponent } from './pages/infoproductos/infoproductos.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductoTablaComponent } from './components/producto-tabla/producto-tabla.component';
import { ProductoSeachComponent } from './components/producto-seach/producto-seach.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { ProductoTarjetaCategoriaComponent } from './components/producto-tarjeta-categoria/producto-tarjeta-categoria.component';
import { MenuprodComponent } from './components/menuprod/menuprod.component';
import { ProdsjComponent } from './components/prodsj/prodsj.component';
import { SjpuntosComponent } from './components/sjpuntos/sjpuntos.component';








@NgModule({
  declarations:
  [
    BuscarComponent,
    ProductoComponent,
    HomeComponent,
    ListadoComponent,
    CategoriaComponent,
    ProductoTablaComponent,
    ProductoSeachComponent,
    ProductoTarjetaComponent,
    ProductoTarjetaCategoriaComponent,
    InfoproductosComponent,
    MenuprodComponent,
    ProdsjComponent,
    SjpuntosComponent
  ],
    
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,


  ]
})
export class ProductosModule { }
