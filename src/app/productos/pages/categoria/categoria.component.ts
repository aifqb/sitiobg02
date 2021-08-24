import { Component } from '@angular/core';
import { ProductosServicesService } from '../../services/productos-services.service';
import { Producto } from '../../../../../../portafolio (2)/src/app/interfaces/producto.interface';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  categorias: string[] = ['chorizo', 'jamon', 'mortadela', 'pate', 'peperoni', 'queso', 'salame', 'salchicha con piel', 'salchicha sin piel', 'salchichon', 'tocino'];
  categoriaActiva: string = '';
  Producto: Producto[] = [];


  constructor(private ProductosServicesService: ProductosServicesService ) {}

  getClaseCSS( categoria: string ): string {
    return (categoria === this.categoriaActiva) ? 'btn btn-danger': 'btn btn-outline-danger';
  }

    activaCategoria ( categoria: string ) {

      if ( categoria === this.categoriaActiva ) { return; }

      this.categoriaActiva = categoria;
      this.Producto =[];

      this.ProductosServicesService.buscarGrupoMayor( categoria )
        .subscribe( produtos => {
          console.log(produtos)
        })
    }

  }
