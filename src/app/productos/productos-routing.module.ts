import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: ProductoComponent },
      { path: '**', redirectTo: 'listado' }
    ] 
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosRoutingModule { }
