import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  productoSelecionado: Producto | undefined;

  constructor( private ProductosServicesService: ProductosServicesService) { }

  ngOnInit(): void {
  }


  
  buscando() {
    this.ProductosServicesService.getSugerencias( this.termino.trim( ))
        .subscribe( items => this.items = items)
  }
  opcionselecionada( event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value) {
      this.productoSelecionado = undefined;
      return;   
    }
    const producto: Producto = event.option.value;
    
    console.log(producto);
    
    this.termino =  producto.producto_Nombre;
    
    this.ProductosServicesService.getProductosPorId( producto.cod_Item_PF! )
      .subscribe( producto => this.productoSelecionado = producto );
  }
}
