import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './share/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { TarjetaPuntoVentaComponent } from './components/tarjeta-punto-venta/tarjeta-punto-venta.component';
import { DeptoComponent } from './components/depto/depto.component';
import { LapazComponent } from './pages/lapaz/lapaz.component';
import { OruroComponent } from './pages/oruro/oruro.component';
import { CbbaComponent } from './pages/cbba/cbba.component';
import { BoliviaComponent } from './pages/bolivia/bolivia.component';
import { PvOrComponent } from './components/pv-or/pv-or.component';
import { PvBoComponent } from './components/pv-bo/pv-bo.component';
import { PvCbComponent } from './components/pv-cb/pv-cb.component';
import { MapaPopComponent } from './components/mapa-pop/mapa-pop.component';

@NgModule({
  declarations: 
  [
    MiniMapaComponent,
    HomeComponent,
    MenuComponent,
    TarjetaPuntoVentaComponent,
    DeptoComponent,
    LapazComponent,
    OruroComponent,
    CbbaComponent,
    BoliviaComponent,
    PvOrComponent,
    PvBoComponent,
    PvCbComponent,
    MapaPopComponent,
  ],
  imports: 
  [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MapasRoutingModule],
})
export class MapasModule {}
