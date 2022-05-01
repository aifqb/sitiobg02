import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ErrorPageComponent } from './share/error-page/error-page.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MapasModule } from './mapas/mapas.module';

const routes: Routes =[
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then(m => m.MapasModule)
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
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' //scroll to the top
  })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
