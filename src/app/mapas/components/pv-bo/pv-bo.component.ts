import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-pv-bo',
  templateUrl: './pv-bo.component.html',
  styleUrls: ['./pv-bo.component.css']
})
export class PvBoComponent implements OnInit {

  puntos: Puntoventa[] = [];
  
  constructor( private puntosVenta: puntosService) { }

  ngOnInit(): void {
    this.puntosVenta.PuntosBo()
      .subscribe( puntos => this.puntos = puntos );
  }

}
