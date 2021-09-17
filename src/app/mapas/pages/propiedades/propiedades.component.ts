import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-68.1280372, -16.5028083];

  casa: [number, number] = [-68.191235, -16.550430];

  

  // Arreglo de marcadores
  marcadores: mapboxgl.Marker[] = [];
  puntos: Puntoventa[] = [];

  constructor(private puntosVenta: puntosService) {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.puntosVenta.getPuntos()
      .subscribe( puntos => this.puntos = puntos );

    const maker = new mapboxgl
      .Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);

      const maker2 = new mapboxgl
      .Marker()
      .setLngLat(this.casa)
      .addTo(this.mapa);
      
    }
}
