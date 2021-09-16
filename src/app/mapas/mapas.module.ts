import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './share/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { TarjetaPuntoVentaComponent } from './components/tarjeta-punto-venta/tarjeta-punto-venta.component';

@NgModule({
  declarations: 
  [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    HomeComponent,
    MenuComponent,
    TarjetaPuntoVentaComponent,
  ],
  imports: 
  [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MapasRoutingModule],
})
export class MapasModule {}
