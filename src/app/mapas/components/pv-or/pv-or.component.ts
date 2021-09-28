import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-pv-or',
  templateUrl: './pv-or.component.html',
  styleUrls: ['./pv-or.component.css']
})
export class PvOrComponent implements OnInit {

  puntos: Puntoventa[] = [];
  
  constructor( private puntosVenta: puntosService) { }

  ngOnInit(): void {
    this.puntosVenta.puntosOr()
      .subscribe( puntos => this.puntos = puntos );
  }

}


