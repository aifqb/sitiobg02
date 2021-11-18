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
  zoomLevel: number = 6;
  center: [number, number] = [-65.806567, -17.848431];

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
      //.addTo(this.mapa);

    this.mapa.on('load', () => {
      this.mapa.addSource('places', {
        type: 'geojson',
        data: 
        {
          type: 'FeatureCollection',
          features: [
            // inicio cocha
            {
              type: "Feature",
              properties: {
                title: "Calle lanza entre Honduras y Brasil",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Calle lanza entre Honduras y Brasil</strong><p>Direccion: <br>C. Lanza 217, Cochabamba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.400282, -66.152166\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.152166,
                  -17.400282
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "La cancha",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>La cancha</strong><p>Direccion: <br>Pulacayo &, Av. Barrientos, Cochabamba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.404619, -66.152319\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.152319,
                  -17.404619
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado 25 de Mayo",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado 25 de Mayo</strong><p>Direccion: <br>Jordan 173, Cochabamba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.394753, -66.154631\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.154631,
                  -17.394753
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado abasto de sacaba",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado abasto de sacaba</strong><p>Direccion: <br>HXX6+7X2, Sacaba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.40192, -66.03761\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.03761,
                  -17.40192
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado Calatayud",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado Calatayud</strong><p>Direccion: <br>JR2W+FJW, Cochabamba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.398647, -66.153311\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.153311,
                  -17.398647
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "mercado central Quillacollo",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>mercado central Quillacollo</strong><p>Direccion: <br>Mercado Central, 14 de Septiembre S/N, Quillacollo, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.397356, -66.27995\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.27995,
                  -17.397356
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado colcapirhua",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado colcapirhua</strong><p>Direccion: <br>JQ54+QPM, Colcapirhua, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.390195, -66.243968\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.243968,
                  -17.390195
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado Quintanilla",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado Quintanilla</strong><p>Direccion: <br>JV7Q+3Q Cochabamba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.387361, -66.110615\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.110615,
                  -17.387361
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado San Antonio",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado San Antonio</strong><p>Direccion: <br>C. Esteban Arze 1159, Cochabamba, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.40233, -66.155054\">abrir en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.155054,
                  -17.40233
                ]
              }
            },
            // fin cochabamba
            //inicio oruro
            {
              type: "Feature",
              properties: {
                title: "Eliana ibarra",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Eliana ibarra</strong><p>Direccion: <br>2VMX+3WM, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.967235, -67.100734\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.100734,
                  -17.967235
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Expreso al paso",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Expreso al paso</strong><p>Direccion: <br>C. R. Pab�n 575, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.94075, -67.114194\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.114194,
                  -17.94075
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Frial do�a Primi",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Frial do�a Primi</strong><p>Direccion: <br>Calle Antofagasta 102, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.9694667, -67.0981032\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.0981032,
                  -17.9694667
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "frial Germayoli",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>frial Germayoli</strong><p>Direccion: <br>RN 4 200, Caracollo, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.640215, -67.220003\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.220003,
                  -17.640215
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Frial sonia",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Frial sonia</strong><p>Direccion: <br>Calle Bolivar, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.972488, -67.105954\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.105954,
                  -17.972488
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Frial Soraida",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Frial Soraida</strong><p>Direccion: <br>Unnamed Road, Challapata, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-18.900742, -66.770883\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -66.770883,
                  -18.900742
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "frial Wilson",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>frial Wilson</strong><p>Direccion: <br>2VXQ+3R7, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.9523446, -67.1103471\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.1103471,
                  -17.9523446
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Jacqueline",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Jacqueline</strong><p>Direccion: <br>Velasco Galvarro 324, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.987178, -67.113964\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.113964,
                  -17.987178
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mariae or",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mariae or</strong><p>Direccion: <br>Av. Circunvalaci�n 20, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.926698, -67.119036\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.119036,
                  -17.926698
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado Bolivar",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado Bolivar</strong><p>Direccion: <br>Adolfo Mier 425, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.97207, -67.104938\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.104938,
                  -17.97207
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado Campero",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado Campero</strong><p>Direccion: <br>2VHQ+JW4, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.9708885, -67.1102207\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.1102207,
                  -17.9708885
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado kantuta",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado kantuta</strong><p>Direccion: <br>Calle 4 17, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.9505942, -67.1029801\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.1029801,
                  -17.9505942
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado san pedro",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado san pedro</strong><p>Direccion: <br>C. Eduardo Avar�a 180, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.946303, -67.113315\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.113315,
                  -17.946303
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Mercado young",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Mercado young</strong><p>Direccion: <br>Av. Espa�a 1983, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.978597, -67.132671\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.132671,
                  -17.978597
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Frial Eugenia",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Frial Eugenia</strong><p>Direccion: <br>Cercado, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.948092, -67.106467\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.106467,
                  -17.948092
                ]
              }
            },
            {
              type: "Feature",
              properties: {
                title: "Supermercado eden",
                icon: "mapbox-marker-icon-orange",
                description: "<strong>Supermercado eden</strong><p>Direccion: <br>2VHM+VVV, Oruro, Bolivia <a target=\"_blank\" href=\"https://www.google.com/maps/place/-17.970241, -67.115378\">abre en Google Maps</a></p>"
              },
              geometry: {
                type: "Point",
                coordinates: [
                  -67.115378,
                  -17.970241
                ]
              }
            }
            // fin oruro

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
          center: [-68.101368, -16.520652],
          zoom: 13,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });
      var or = document.getElementById('or')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-67.105221, -17.964195],
          zoom: 13,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });
      var cb = document.getElementById('cb')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-66.15477561950684, -17.398804053649485],
          zoom: 12,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });

      this.mapa.addControl(new mapboxgl.FullscreenControl());
    });
  }
}
