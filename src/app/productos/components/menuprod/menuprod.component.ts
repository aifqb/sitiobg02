import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}



@Component({
  selector: 'app-menuprod',
  templateUrl: './menuprod.component.html',
  styleUrls: ['./menuprod.component.css']
})
export class MenuprodComponent  {

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
