import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-lapaz',
  templateUrl: './lapaz.component.html',
  styleUrls: ['./lapaz.component.css']
})
export class LapazComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 12;
  center: [number, number] = [-68.121970, -16.501737];


  // Arreglo de marcadores
  marcadores: mapboxgl.Marker[] = [];
  puntos: Puntoventa[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      center: this.center,
      zoom: this.zoomLevel,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);

  }
}
