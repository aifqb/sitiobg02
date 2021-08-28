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
      ruta: 'fullscreen',
      nombre: 'Fullscreen'
    },
    {
      ruta: 'zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: 'marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: 'propiedades',
      nombre: 'Propiedades'
    },
  ];

}
