import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: MenuItem [] = [
    {
      ruta: 'puntosdeventa',
      nombre: 'Puntos de venta'
    },
    {
      ruta: 'oruro',
      nombre: 'Oruro'
    },
    {
      ruta: 'cbba',
      nombre: 'Cochabamba'
    },
    {
      ruta: 'bolivia',
      nombre: 'Bolivia'
    },
  ];

}
