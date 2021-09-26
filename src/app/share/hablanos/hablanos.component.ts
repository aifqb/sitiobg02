import { Component, OnInit } from '@angular/core';
import { InfoContacto } from 'src/app/intefaces/info-contacto.interface';
import { InfoContactoService } from 'src/app/services/info-contacto.service';

@Component({
  selector: 'app-hablanos',
  templateUrl: './hablanos.component.html',
  styleUrls: ['./hablanos.component.css']
})
export class HablanosComponent implements OnInit {

  contactos: InfoContacto[] = [];
  
  constructor( public contatosServices: InfoContactoService) { }

  ngOnInit(): void {
    this.contatosServices.getContactos()
      .subscribe( contactos => this.contactos = contactos);
  }
}
