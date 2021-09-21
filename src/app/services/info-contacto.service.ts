import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoContacto } from '../intefaces/info-contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoContactoService {

  

  contacto: InfoContacto = {};

  constructor( private http: HttpClient) { 
    this.http.get('https://angular-html-517d8-default-rtdb.firebaseio.com/info-contacto.json')
    .subscribe(( resp: InfoContacto ) => {
        this.contacto = resp;
      });
  }
}
