import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/intefaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

anio: number = new Date().getFullYear();

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
