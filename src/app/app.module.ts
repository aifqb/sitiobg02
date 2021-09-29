import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { InfoPaginaService } from './services/info-pagina.service';
import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorPageComponent } from './share/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { WpButtonComponent } from './share/wp-button/wp-button.component';
import { PiecardComponent } from './share/piecard/piecard.component';
import { MenuComponent } from './share/menu/menu.component';
import { CaruselUnoComponent } from './share/carusel-uno/carusel-uno.component';
import { WhyBgComponent } from './share/why-bg/why-bg.component';
import { TarjetaComponent } from './share/tarjeta/tarjeta.component';
import { PortadaComponent } from './share/portada/portada.component';
import { CompranosComponent } from './share/compranos/compranos.component';
import { HistoriaComponent } from './share/historia/historia.component';
import { InLineComponent } from './share/in-line/in-line.component';
import { VideosComponent } from './share/videos/videos.component';
import { ContactoPieComponent } from './share/contacto-pie/contacto-pie.component';
import { ConceptoComponent } from './share/concepto/concepto.component';
import { HablanosComponent } from './share/hablanos/hablanos.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    EventosComponent,
    WpButtonComponent,
    PiecardComponent,
    MenuComponent,
    CaruselUnoComponent,
    WhyBgComponent,
    TarjetaComponent,
    PortadaComponent,
    CompranosComponent,
    HistoriaComponent,
    InLineComponent,
    VideosComponent,
    ContactoPieComponent,
    ConceptoComponent,
    HablanosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [
    InfoPaginaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
