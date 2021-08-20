import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  constructor( private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    // return this.http.get<Producto[]>('https://angular-html-517d8-default-rtdb.firebaseio.com/productos.json')
    return this.http.get<Producto[]>('https://webapiproductos.azurewebsites.net/api/productos')
  }
  
  getProductosPorId( id: string): Observable<Producto> {
    return this.http.get<Producto>(`https://angular-html-517d8-default-rtdb.firebaseio.com/productos/${ id }.json`) 
  }
  getSugerencias( termino: string ): Observable<Producto[]> { 
    return this.http.get<Producto[]>(`https://webapiproductos.azurewebsites.net/api/productos/producto?cantidadRegistrosPorPagina=100&ProductoNombre=${ termino }`) 
  }

}
