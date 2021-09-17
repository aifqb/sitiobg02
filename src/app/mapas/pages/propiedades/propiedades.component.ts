import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}

// export class SelectOverviewExample {
//   foods: Food[] = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'}
//   ];
// }

// 'La Paz'
// 'Oruro'
// 'Cochabamba'
// 'Potosi'
// 'Chuquisaca'
// 'Tarija'
// 'Santa Cruz'
// 'Beni'
// 'Pando'
