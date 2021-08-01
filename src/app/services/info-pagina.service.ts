import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../intefaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {


    constructor( private http: HttpClient ) { }

  infoPagina(){
    return this.http.get<InfoPagina[]>('https://angular-html-517d8-default-rtdb.firebaseio.com/info.json')
    
  }
}
