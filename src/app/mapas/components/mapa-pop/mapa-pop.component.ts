import { hostViewClassName } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa-pop',
  templateUrl: './mapa-pop.component.html',
  styleUrls: ['./mapa-pop.component.css'],
})
export class MapaPopComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 12;
  center: [number, number] = [-67.1484375, -17.035777250427184];

  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      //   style: 'mapbox://styles/mapbox/streets-v11',

      center: this.center,
      zoom: this.zoomLevel,
    });
    this.mapa.addControl(new mapboxgl.NavigationControl());
    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.mapa.on('load', () => {
      this.mapa.addSource('places', {
        type: 'geojson',
        data: 
        {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                title: 'La cancha',
                icon: 'mapbox-marker-icon-orange',
                description: 'La cancha'
              },
              geometry: { type: 'Point', coordinates: [-66.152319, -17.404619] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado San Antonio',
                icon: 'mapbox-marker-icon-orange',
                description: 'Mercado San Antonio'
              },
              geometry: { type: 'Point', coordinates: [-66.155054, -17.40233] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Calle lanza entre Honduras y Brasil',
                icon: 'mapbox-marker-icon-orange',
                description: 'Calle lanza entre Honduras y Brasil'
              },
              geometry: { type: 'Point', coordinates: [-66.152166, -17.400282] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado Calatayud',
                icon: 'mapbox-marker-icon-orange',
                description: 'Mercado Calatayud'
              },
              geometry: { type: 'Point', coordinates: [-66.153311, -17.398647] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado Quintanilla',
                icon: 'mapbox-marker-icon-orange',
                description: 'Mercado Quintanilla'
              },
              geometry: { type: 'Point', coordinates: [-66.110615, -17.387361] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado abasto de sacaba',
                icon: 'mapbox-marker-icon-orange',
                description: 'Mercado abasto de sacaba'
              },
              geometry: { type: 'Point', coordinates: [-66.03761, -17.40192] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado 25 de Mayo',
                icon: 'mapbox-marker-icon-orange',
                description: 'Mercado 25 de Mayo'
              },
              geometry: { type: 'Point', coordinates: [-66.154631, -17.394753] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado colcapirhua',
                icon: 'mapbox-marker-icon-orange',
                description: 'Mercado colcapirhua'
              },
              geometry: { type: 'Point', coordinates: [-66.243968, -17.390195] }
            },
            {
              type: 'Feature',
              properties: {
                title: 'mercado central Quillacollo',
                icon: 'mapbox-marker-icon-orange',
                description: 'mercado central Quillacollo'
              },
              geometry: { type: 'Point', coordinates: [-66.27995, -17.397356] }
            }
          ]
        }
        
        ,
      });

      this.mapa.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': '{icon}',
          'icon-allow-overlap': true,
          'text-field': ['get', 'title'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.1],
          'text-size': 14,
          'text-allow-overlap': false,
          'text-anchor': 'top',
        },
      });
      this.mapa.on('click', 'places', (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.mapa);
      });

      this.mapa.on('mouseenter', 'places', () => {
        this.mapa.getCanvas().style.cursor = 'pointer';
      });

      this.mapa.on('mouseleave', 'places', () => {
        this.mapa.getCanvas().style.cursor = '';
      });

      this.mapa.on('click', 'places', (b: any) => {
        this.mapa.flyTo({
          center: b.features[0].geometry.coordinates,
        });
      });

      var lp = document.getElementById('lp')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-68.143866, -16.505482],
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });
      var or = document.getElementById('or')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-67.105221, -17.964195],
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });
      var cb = document.getElementById('cb')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-66.15477561950684, -17.398804053649485],
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });

      this.mapa.addControl(new mapboxgl.FullscreenControl());
    });
  }
}
