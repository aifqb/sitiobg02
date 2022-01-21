import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  //private apiUrl: string = 'https://webapiproductos.azurewebsites.net/api/productos';
  // private apiUrl: string = 'https://api-bg.herokuapp.com/api/productos';
  // private baseUrl: string = 'http://localhost:8080/api';
  private baseUrl: string = environment.baseUrl;
  


  constructor( private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    const url = `${ this.baseUrl }/api/productos`
    return this.http.get<Producto[]>(url)
  }
  
  getProductosPorId( id: number): Observable<Producto> {
    const url = `${ this.baseUrl }/api/buscar/productoid/${ id }`
    return this.http.get<Producto>(url) 
  }
  getSugerencias( termino: string ): Observable<Producto[]> { 
    const url = `${ this.baseUrl }/api/buscar/producto/${ termino }`
    return this.http.get<Producto[]>(url) 
  }

  buscarGrupoMayor( grupoMayor: string): Observable<Producto[]> {
    const url = `${ this.baseUrl }/api/buscar/grupomayor/${ grupoMayor }`
    return this.http.get<Producto[]>(url) 
  }

}
