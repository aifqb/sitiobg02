import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/intefaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-carusel-uno',
  templateUrl: './carusel-uno.component.html',
  styleUrls: ['./carusel-uno.component.css']
})
export class CaruselUnoComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
