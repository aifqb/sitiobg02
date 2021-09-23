import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-contacto-pie',
  templateUrl: './contacto-pie.component.html',
  styleUrls: ['./contacto-pie.component.css']
})
export class ContactoPieComponent implements OnInit {

  anio: number = new Date().getFullYear();
  
    constructor( public _servicio: InfoPaginaService ) { }
  
    ngOnInit(): void {
    }
}
