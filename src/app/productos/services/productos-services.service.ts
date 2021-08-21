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
<<<<<<< HEAD
    return this.http.get<Producto[]>('https://webapiproductos.azurewebsites.net/api/productos')
=======
    return this.http.get<Producto[]>('https://localhost:44342/api/productos')
>>>>>>> adf58ee9f3f42786747fbed099cd241c4f8a4c23
  }
  
  getProductosPorId( id: string): Observable<Producto> {
    return this.http.get<Producto>(`https://angular-html-517d8-default-rtdb.firebaseio.com/productos/${ id }.json`) 
  }
  getSugerencias( termino: string ): Observable<Producto[]> { 
<<<<<<< HEAD
    return this.http.get<Producto[]>(`https://webapiproductos.azurewebsites.net/api/productos/producto?cantidadRegistrosPorPagina=100&ProductoNombre=${ termino }`) 
=======
    return this.http.get<Producto[]>(`https://localhost:44342/api/productos/busqueda?cantidadRegistrosPorPagina=50&ProductoNombre=${ termino }`) 
>>>>>>> adf58ee9f3f42786747fbed099cd241c4f8a4c23
  }

}
