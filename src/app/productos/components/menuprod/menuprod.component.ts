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
    // {
    //   ruta: 'listado',
    //   nombre: 'productos'
    // },
    {
      ruta: 'lineadeproductos',
      nombre: 'Linea'
    },
    {
      ruta: 'buscar',
      nombre: 'Buscar'
    },

    {
      ruta: 'promociones',
      nombre: 'Promociones'
    },
  ];

  

}
