import { Component, } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent  {

  menus: MenuItem[] = [
    {
      ruta: 'listado',
      nombre: 'Lista de productos'
    },
    {
      ruta: 'buscar',
      nombre: 'Buscar producto'
    },
    {
      ruta: 'lineadeproductos',
      nombre: 'Linea de productos'
    },
    {
      ruta: 'promociones',
      nombre: 'Promociones'
    },
  ];

  


}
