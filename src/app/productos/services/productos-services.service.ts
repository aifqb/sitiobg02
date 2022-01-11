import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  //private apiUrl: string = 'https://webapiproductos.azurewebsites.net/api/productos';
  // private apiUrl: string = 'https://api-bg.herokuapp.com/api/productos';
  private apiUrl: string = 'http://localhost:8080/api';



  constructor( private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    const url = `${ this.apiUrl }/productos`
    return this.http.get<Producto[]>(url)
  }
  
  getProductosPorId( id: number): Observable<Producto> {
    const url = `${ this.apiUrl }/buscar/producto/${ id }`
    return this.http.get<Producto>(url) 
  }
  getSugerencias( termino: string ): Observable<Producto[]> { 
    const url = `${ this.apiUrl }/buscar/producto/${ termino }`
    return this.http.get<Producto[]>(url) 
  }

  buscarGrupoMayor( grupoMayor: string): Observable<Producto[]> {
    const url = `${ this.apiUrl }/grupomayor?cantidadRegistrosPorPagina=50&CampoOrdenar=Menor_Nuevo&OrdenAscendente=true&CampoOrdenar2=Proceso&OrdenAscendente2=true&Grupo_Mayor=${ grupoMayor }`
    return this.http.get<Producto[]>(url) 
  }

}
