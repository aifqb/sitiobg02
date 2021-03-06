import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoContacto } from '../intefaces/info-contacto.interface';
import { Observable } from 'rxjs';
import { Videos } from '../intefaces/info-video.interface';
import { Sanjuan } from '../productos/pages/infoproductos/infoproductos.component';

@Injectable({
  providedIn: 'root'
})
export class InfoContactoService {

  private apiUrl: string = 'https://angular-html-517d8-default-rtdb.firebaseio.com/info-contacto.json';

  private apivideosUrl: string = 'https://angular-html-517d8-default-rtdb.firebaseio.com/videos.json';

  private apipsjUrl: string = 'https://angular-html-517d8-default-rtdb.firebaseio.com/promo.json';


  constructor( private http: HttpClient) { }

  getContactos(): Observable<InfoContacto[]>{
    const url = `${ this.apiUrl }`
    return this.http.get<InfoContacto[]>(url)
  }

  getVideos(): Observable<Videos[]>{
    const url = `${ this.apivideosUrl }`
    return this.http.get<Videos[]>(url)
  }

  getPromo(): Observable<Sanjuan[]>{
    const url = `${ this.apipsjUrl }`
    return this.http.get<Sanjuan[]>(url)
  }
}
