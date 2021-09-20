import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-oruro',
  templateUrl: './oruro.component.html',
  styleUrls: ['./oruro.component.css']
})
export class OruroComponent implements AfterViewInit {
  
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 12;
  center: [number, number] = [-67.110232, -17.970748];

  constructor() {}


  
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.mapa.addControl(new mapboxgl.NavigationControl());

    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);

  }
}
