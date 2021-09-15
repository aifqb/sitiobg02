import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css'],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/alexqb/cktccupfp07ra17semcjfh4k5',
      center: [-68.1280372, -16.5028083],
      zoom: 10,
    });
  }
}




// style: 'mapbox://styles/mapbox/streets-v11',
