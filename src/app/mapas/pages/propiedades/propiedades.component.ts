import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements AfterViewInit {



  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;

  zoomLevel: number = 12;

  LaPaz:      [number, number] = [-68.1280372, -16.5028083];
  Cochabamba: [number, number] = [-66.198895,  -17.3939741];
  Oruro:      [number, number] = [-67.109276,  -17.966365];

  // Arreglo de marcadores
  marcadores: mapboxgl.Marker[] = [];
  


  constructor(private puntosVenta: puntosService) {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      center: this.LaPaz,
      zoom: this.zoomLevel,
    });



    this.mapa.addControl(new mapboxgl.NavigationControl());


    const marker = new mapboxgl.Marker()
      .setLngLat(this.LaPaz)
      .addTo(this.mapa);
    const marker2 = new mapboxgl.Marker()
      .setLngLat(this.Cochabamba)
      .addTo(this.mapa);
    const marker3 = new mapboxgl.Marker()
      .setLngLat(this.Oruro)
      .addTo(this.mapa);
  }


}
