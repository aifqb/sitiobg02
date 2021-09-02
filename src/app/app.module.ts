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
import { MenuComponent } from './share/menu/menu.component'


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
    MenuComponent
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
