import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Puntoventa } from '../../interfaces/puntos.interface';
import { puntosService } from '../../services/puntos.service';

interface Depto{
  departamento: string;
  }
  

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements AfterViewInit {

  departamentos: Depto[] = [
    { departamento: 'LaPaz'},
    { departamento: 'Oruro'},
    { departamento: 'Cochabamba'},
    // { departamento: 'Potosi'},
    // { departamento: 'Chuquisaca'},
    // { departamento: 'Tarija'},
    // { departamento: 'Santa Cruz'},
    // { departamento: 'Beni'},
    // { departamento: 'Pando'},
  ];
  selectedDepto = this.departamentos[0].departamento;

  regionActiva: string = ''

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 12;
  LaPaz: [number, number] = [-68.1280372, -16.5028083];
  Cochabamba: [number, number] = [-68.191235, -16.55043];
  Oruro: [number, number] = [-67.109276, -17.966365];

  // Arreglo de marcadores
  marcadores: mapboxgl.Marker[] = [];
  puntos: Puntoventa[] = [];

  constructor(private puntosVenta: puntosService) {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      center: this.LaPaz,
      zoom: this.zoomLevel,
    });

    this.puntosVenta.getPuntos().subscribe((puntos) => (this.puntos = puntos));

    const marker = new mapboxgl.Marker().setLngLat(this.LaPaz).addTo(this.mapa);
    const marker2 = new mapboxgl.Marker().setLngLat(this.Cochabamba).addTo(this.mapa);
    const marker3 = new mapboxgl.Marker().setLngLat(this.Oruro).addTo(this.mapa);

  }

  irMarcador(marker: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marker.getLngLat(),
    });
  }
  activarRegion(option: string) {
    this.regionActiva = option;
  }
}
