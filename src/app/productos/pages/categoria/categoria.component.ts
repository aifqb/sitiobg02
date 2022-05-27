import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosServicesService } from '../../services/productos-services.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent {
  categorias: string[] = [

    'jamon',
    'mortadela',
    'Chorizo cocido',
    'Chorizo frezco',
    'salchicha con piel',
    'salchicha sin piel',
    'tocino',
    'salame',
    'queso',
    'salchichon',
    'peperoni',

  ];
  categoriaActiva: string = '';
  productos: Producto[] = [];

  constructor(private ProductosServicesService: ProductosServicesService) {}

  getClaseCSS(categoria: string): string {
    return categoria === this.categoriaActiva
      ? 'mat-raised-button'
      : '';
  }

  activaCategoria(categoria: string) {
    if (categoria === this.categoriaActiva) {
      return;
    }

    this.categoriaActiva = categoria;
    this.productos = [];

    this.ProductosServicesService.buscarGrupoMayor(categoria)
    .subscribe(productos => this.productos = productos);
  }
}
