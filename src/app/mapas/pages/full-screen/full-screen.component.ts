import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css'],
})
export class FullScreenComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      center: [-68.1280372, -16.5028083],
      zoom: 10,
    });
    this.mapa.on('click', ({ point }) => {
      const features = this.mapa.queryRenderedFeatures(point, {
        layers: ['Basicbg'],
      });

      if (!features.length) {
        return;
      }
      const feature = features[0];
    });
  }
}

// https://angular-html-517d8-default-rtdb.firebaseio.com/pdv
