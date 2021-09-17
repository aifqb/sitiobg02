import { Component, OnInit } from '@angular/core';

interface Depto{
departamento: string;
}

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styleUrls: ['./depto.component.css']
})
export class DeptoComponent implements OnInit {

  departamentos: Depto[] = [
    { departamento: 'La Paz' },
    { departamento: 'Oruro' },
    { departamento: 'Cochabamba' },
    { departamento: 'Potosi' },
    { departamento: 'Chuquisaca' },
    { departamento: 'Tarija' },
    { departamento: 'Santa Cruz' },
    { departamento: 'Beni' },
    { departamento: 'Pando' },
  ];
  selectedDepto = this.departamentos[0].departamento;


  constructor() { }

  ngOnInit(): void {
  }

}
