import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styleUrls: ['./depto.component.css']
})
export class DeptoComponent implements OnInit {

  foods: Food[] = [
    { value: 'La Paz', viewValue: 'La Paz' },
    { value: 'Oruro', viewValue: 'Oruro' },
    { value: 'Cochabamba', viewValue: 'Cochabamba' },
    { value: 'Potosi', viewValue: 'Potosi' },
    { value: 'Chuquisaca', viewValue: 'Chuquisaca' },
    { value: 'Tarija', viewValue: 'Tarija' },
    { value: 'Santa Cruz', viewValue: 'Santa Cruz' },
    { value: 'Beni', viewValue: 'Beni' },
    { value: 'Pando', viewValue: 'Pando' },
  ];
  selectedFood = this.foods[0].value;


  constructor() { }

  ngOnInit(): void {
  }

}
