import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ErrorPageComponent } from './share/error-page/error-page.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EncuentranosComponent } from './pages/encuentranos/encuentranos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes =[
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'encuentranos',
    component: EncuentranosComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
