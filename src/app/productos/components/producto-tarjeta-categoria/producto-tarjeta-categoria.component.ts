import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto-tarjeta-categoria',
  templateUrl: './producto-tarjeta-categoria.component.html',
  styleUrls: ['./producto-tarjeta-categoria.component.css']
})
export class ProductoTarjetaCategoriaComponent implements OnInit {

  @Input() productos: Producto[] = []  

  constructor() { }

  ngOnInit(): void {
  }

}
