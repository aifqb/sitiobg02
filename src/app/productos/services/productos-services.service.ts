import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  constructor( private http: HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>('https://angular-html-517d8-default-rtdb.firebaseio.com/productos.json')
  } 
}
