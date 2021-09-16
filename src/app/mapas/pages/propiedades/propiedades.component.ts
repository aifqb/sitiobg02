import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {

  puntos: Puntoventa[] = [];
  
  constructor( private puntosVenta: puntosService) { }

  ngOnInit(): void {
    this.puntosVenta.getPuntos()
      .subscribe( puntos => this.puntos = puntos );
  }

}
