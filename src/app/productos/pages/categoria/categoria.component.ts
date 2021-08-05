import { Component } from '@angular/core';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  categorias: string[] = ['chorizo', 'jamon', 'mortadela', 'pate', 'peperoni', 'queso', 'salame', 'salchicha con piel', 'salchicha sin piel', 'salchichon', 'tocino'];
  categoriaActiva: string = '';

  constructor() {}

  getClaseCSS( categoria: string ): string {
    return (categoria === this.categoriaActiva) ? 'btn btn-danger': 'btn btn-outline-danger';
  }

    activaCategoria ( categoria: string ) {
      this.categoriaActiva = categoria;

    }

  }
