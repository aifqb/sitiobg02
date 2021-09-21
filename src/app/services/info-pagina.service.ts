import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../intefaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};

    constructor( private http: HttpClient ) {
      
      this.http.get('https://angular-html-517d8-default-rtdb.firebaseio.com/info.json')
        .subscribe(( resp: InfoPagina ) => {
            this.info = resp;
          });
    }
}
