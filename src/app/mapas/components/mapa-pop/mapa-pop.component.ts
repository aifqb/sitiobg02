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
  center: [number, number] = [-77.04, 38.907];

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
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                title: 'Mapbox DC',
                description:
                  '<strong>otro punto</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.038659, 38.931567],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.003168, 38.894651],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.090372, 38.881189],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.111561, 38.882342],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.052477, 38.943951],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.043444, 38.909664],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.031706, 38.914581],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.020945, 38.878241],
              },
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>punto de venta</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
                icon: 'mapbox-marker-icon-orange',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.007481, 38.876516],
              },
            },
          ],
        },
      });

      this.mapa.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': '{icon}',
          'icon-allow-overlap': true,
          'text-field': ['get', 'title'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 0.1],
                        'text-size':14,
                        'text-allow-overlap':false,
                        'text-anchor': 'top'
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
      this.mapa.addControl(new mapboxgl.FullscreenControl());
    });
  }
}