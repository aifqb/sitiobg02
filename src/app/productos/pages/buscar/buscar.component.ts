import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosServicesService } from '../../services/productos-services.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  items: Producto[] = [];

  constructor( private ProductosServicesService: ProductosServicesService) { }

  ngOnInit(): void {
  }
  buscando() {
    this.ProductosServicesService.getSugerencias( this.termino)
        .subscribe( items => this.items = items)
  }
}
