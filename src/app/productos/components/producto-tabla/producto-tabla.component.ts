import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';



@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit {

  @Input() productos: Producto[] = []  

  constructor() { }

  ngOnInit(): void {
  }

}
