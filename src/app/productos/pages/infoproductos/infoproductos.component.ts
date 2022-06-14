import { Component, OnInit } from '@angular/core';
import { InfoContactoService } from 'src/app/services/info-contacto.service';

export interface Sanjuan {
  "codigodeItem":         number;
  "nombreProducto":       string;
  "unidades":             number;
  "pesoGr":              number;
  "PrecioCalc":           number;
  "PrecioFinal":          number;
  "tamanoCm":             number;
  "vigente":              string;
}


@Component({
  selector: 'app-infoproductos',
  templateUrl: './infoproductos.component.html',
  styleUrls: ['./infoproductos.component.css']
})
export class InfoproductosComponent implements OnInit{

  productos: Sanjuan[] = [];

  constructor( public promoServices: InfoContactoService ) { }
  
  ngOnInit(): void {
    this.promoServices.getPromo()
      .subscribe( productos => this.productos = productos);
  }

 
}
