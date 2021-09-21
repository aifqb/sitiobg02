import { Component, OnInit } from '@angular/core';
import { InfoContactoService } from '../../services/info-contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  
  
  constructor( public _sercon: InfoContactoService) { }

  ngOnInit(): void {
    
  }

}
