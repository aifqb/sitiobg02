import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LapazComponent } from './pages/lapaz/lapaz.component';
import { OruroComponent } from './pages/oruro/oruro.component';
import { CbbaComponent } from './pages/cbba/cbba.component';
import { BoliviaComponent } from './pages/bolivia/bolivia.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'puntosdeventa', component: LapazComponent },
      { path: 'oruro', component: OruroComponent },
      { path: 'cbba', component: CbbaComponent },
      { path: 'bolivia', component: BoliviaComponent },
      { path: '**', redirectTo: 'puntosdeventa' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapasRoutingModule {}
