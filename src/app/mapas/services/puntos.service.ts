import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Puntoventa } from '../interfaces/puntos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class puntosService {

    constructor( private http: HttpClient ) {}

      getPuntos(): Observable<Puntoventa[]> {
        return this.http.get<Puntoventa[]>('https://angular-html-517d8-default-rtdb.firebaseio.com/pdv.json')
      } 

      
    

}
