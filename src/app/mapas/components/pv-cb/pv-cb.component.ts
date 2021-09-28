import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-pv-cb',
  templateUrl: './pv-cb.component.html',
  styleUrls: ['./pv-cb.component.css']
})
export class PvCbComponent implements OnInit {

  puntos: Puntoventa[] = [];
  
  constructor( private puntosVenta: puntosService) { }

  ngOnInit(): void {
    this.puntosVenta.PuntosCb()
      .subscribe( puntos => this.puntos = puntos );
  }

}
