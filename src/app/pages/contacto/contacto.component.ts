import { Component, OnInit } from '@angular/core';
import { InfoContacto } from 'src/app/intefaces/info-contacto.interface';
import { InfoContactoService } from '../../services/info-contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactos: InfoContacto[] = [];
  
  constructor( public contatosServices: InfoContactoService) { }

  ngOnInit(): void {
    this.contatosServices.getContactos()
      .subscribe( contactos => this.contactos = contactos);
  }
}
