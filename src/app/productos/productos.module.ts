import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [BuscarComponent, ProductoComponent, HomeComponent, ListadoComponent],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
