import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from '../../services/productos-services.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosServices: ProductosServicesService ) { }

  ngOnInit(): void {
    this.productosServices.getProductos()
      .subscribe( productos => this.productos = productos );
  }
  

}
