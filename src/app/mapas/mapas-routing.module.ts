import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'lapaz', component: FullScreenComponent },
      { path: 'oruro', component: ZoomRangeComponent },
      { path: 'cbba', component: MarcadoresComponent },
      { path: 'bolivia', component: PropiedadesComponent },
      { path: '**', redirectTo: 'lapaz' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapasRoutingModule {}
