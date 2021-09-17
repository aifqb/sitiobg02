import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements AfterViewInit {
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


  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-68.1280372, -16.5028083];

  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });
    
    const maker = new mapboxgl.Marker()
    .setLngLat(this.center)
    .addTo( this.mapa);
  }
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
