import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-tarjeta-punto-venta',
  templateUrl: './tarjeta-punto-venta.component.html',
  styleUrls: ['./tarjeta-punto-venta.component.css']
})
export class TarjetaPuntoVentaComponent implements OnInit {

  puntos: Puntoventa[] = [];
  
  constructor( private puntosVenta: puntosService) { }

  ngOnInit(): void {
    this.puntosVenta.getPuntos()
      .subscribe( puntos => this.puntos = puntos );
  }

}



