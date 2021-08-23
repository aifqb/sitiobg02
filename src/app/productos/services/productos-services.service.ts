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
  
  getProductosPorId( id: number): Observable<Producto> {
    return this.http.get<Producto>(`https://webapiproductos.azurewebsites.net/api/productos/Cod_Item_PF:int?Cod_Item_PF=${ id }`) 
  }
  getSugerencias( termino: string ): Observable<Producto[]> { 
    return this.http.get<Producto[]>(`https://webapiproductos.azurewebsites.net/api/productos/busqueda?cantidadRegistrosPorPagina=50&ProductoNombre=${ termino }`) 
  }

}
