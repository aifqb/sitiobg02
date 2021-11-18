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
    const marker = new mapboxgl.Marker().setLngLat(this.center);
    //.addTo(this.mapa);

    this.mapa.on('load', () => {
      this.mapa.addSource('places', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            // inicio cocha
            {
              type: 'Feature',
              properties: {
                title: 'Calle lanza entre Honduras y Brasil',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Calle lanza entre Honduras y Brasil</strong><p>Direccion: <br>C. Lanza 217, Cochabamba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.400282, -66.152166">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.152166, -17.400282],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'La cancha',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>La cancha</strong><p>Direccion: <br>Pulacayo &, Av. Barrientos, Cochabamba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.404619, -66.152319">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.152319, -17.404619],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado 25 de Mayo',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado 25 de Mayo</strong><p>Direccion: <br>Jordan 173, Cochabamba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.394753, -66.154631">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.154631, -17.394753],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado abasto de sacaba',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado abasto de sacaba</strong><p>Direccion: <br>HXX6+7X2, Sacaba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.40192, -66.03761">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.03761, -17.40192],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado Calatayud',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado Calatayud</strong><p>Direccion: <br>JR2W+FJW, Cochabamba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.398647, -66.153311">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.153311, -17.398647],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'mercado central Quillacollo',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>mercado central Quillacollo</strong><p>Direccion: <br>Mercado Central, 14 de Septiembre S/N, Quillacollo, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.397356, -66.27995">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.27995, -17.397356],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado colcapirhua',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado colcapirhua</strong><p>Direccion: <br>JQ54+QPM, Colcapirhua, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.390195, -66.243968">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.243968, -17.390195],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado Quintanilla',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado Quintanilla</strong><p>Direccion: <br>JV7Q+3Q Cochabamba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.387361, -66.110615">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.110615, -17.387361],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado San Antonio',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado San Antonio</strong><p>Direccion: <br>C. Esteban Arze 1159, Cochabamba, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.40233, -66.155054">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.155054, -17.40233],
              },
            },
            // fin cochabamba
            //inicio oruro
            {
              type: 'Feature',
              properties: {
                title: 'Eliana ibarra',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Eliana ibarra</strong><p>Direccion: <br>2VMX+3WM, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.967235, -67.100734">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.100734, -17.967235],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Expreso al paso',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Expreso al paso</strong><p>Direccion: <br>C. R. Pab�n 575, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.94075, -67.114194">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.114194, -17.94075],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial do�a Primi',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial do�a Primi</strong><p>Direccion: <br>Calle Antofagasta 102, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.9694667, -67.0981032">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.0981032, -17.9694667],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'frial Germayoli',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>frial Germayoli</strong><p>Direccion: <br>RN 4 200, Caracollo, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.640215, -67.220003">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.220003, -17.640215],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial sonia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial sonia</strong><p>Direccion: <br>Calle Bolivar, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.972488, -67.105954">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.105954, -17.972488],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial Soraida',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial Soraida</strong><p>Direccion: <br>Unnamed Road, Challapata, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-18.900742, -66.770883">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-66.770883, -18.900742],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'frial Wilson',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>frial Wilson</strong><p>Direccion: <br>2VXQ+3R7, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.9523446, -67.1103471">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.1103471, -17.9523446],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Jacqueline',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Jacqueline</strong><p>Direccion: <br>Velasco Galvarro 324, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.987178, -67.113964">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.113964, -17.987178],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Todo queso',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<Todo queso</strong><p>Direccion: <br>Av. Circunvalaci�n 20, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.9791858, -67.1042737">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.1042737, -17.9791858],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado Bolivar',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado Bolivar</strong><p>Direccion: <br>Adolfo Mier 425, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.97207, -67.104938">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.104938, -17.97207],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado Campero',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado Campero</strong><p>Direccion: <br>2VHQ+JW4, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.9708885, -67.1102207">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.1102207, -17.9708885],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado kantuta',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado kantuta</strong><p>Direccion: <br>Calle 4 17, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.9505942, -67.1029801">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.1029801, -17.9505942],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado san pedro',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado san pedro</strong><p>Direccion: <br>C. Eduardo Avar�a 180, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.946303, -67.113315">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.113315, -17.946303],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado young',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado young</strong><p>Direccion: <br>Av. Espa�a 1983, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.978597, -67.132671">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.132671, -17.978597],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial Eugenia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial Eugenia</strong><p>Direccion: <br>Cercado, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.948092, -67.106467">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.106467, -17.948092],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Supermercado eden',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Supermercado eden</strong><p>Direccion: <br>2VHM+VVV, Oruro, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-17.970241, -67.115378">abre en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-67.115378, -17.970241],
              },
            },
            // fin oruro
            // inicio lp
            {
              type: 'Feature',
              properties: {
                title: 'Almacen fanny',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Almacen fanny</strong><p>Direccion: <br>Zona 9, Av. Am�rica 490, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.492536, -68.142512">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.142512, -16.492536],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Comercial limachi',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Comercial limachi</strong><p>Direccion: <br>C66V+WX7, Villa Imperial de Potos� <a target="_blank" href="https://www.google.com/maps/place/-19.587630, -65.755102">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-65.755102, -19.58763],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Bon Gusto El palacio de los embutidos',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Bon Gusto El palacio de los embutidos</strong><p>Direccion: <br>Dias Romero pasaje florida, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5017475, -68.1220723">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1220723, -16.5017475],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial betty',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial betty</strong><p>Direccion: <br>8PW2+FRH Plaza Evaristo Valle, Viacha, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.654193, -68.29759">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.29761385917664, -16.654188301684314],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial blanca',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial blanca</strong><p>Direccion: <br>Av. Camacho 1537, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5005108, -68.1312173">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1312173, -16.5005108],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial blanquita',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial blanquita</strong><p>Direccion: <br>Av. Ramos Gavilan 1367, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.475615, -68.149637">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.149637, -16.475615],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial claudia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial claudia</strong><p>Direccion: <br>Av. Argelia 629, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.552491, -68.195844">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.195844, -16.552491],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial concepcion',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial concepcion</strong><p>Direccion: <br>FRVR+H4R, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5062116, -68.1600792">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1600792, -16.5062116],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial cristian',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial cristian</strong><p>Direccion: <br>Av. Buenos Aires 1340, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5041834, -68.1440473">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1440473, -16.5041834],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial daniela',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial daniela</strong><p>Direccion: <br>19 181, Viacha, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.652047, -68.299557">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.299557, -16.652047],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial don jorge',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial don jorge</strong><p>Direccion: <br>FVXW+58C, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.50198, -68.10423">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.10423, -16.50198],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial do�a eulogia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial do�a eulogia</strong><p>Direccion: <br>FRVQ+GQJ, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5061716, -68.16054">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.16054, -16.5061716],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial do�a martha',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial do�a martha</strong><p>Direccion: <br>FVCF+P7M, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.52788, -68.12709">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.12709, -16.52788],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial erminia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial erminia</strong><p>Direccion: <br>Av. Mario Mercado 155, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.527977, -68.124698">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.124698, -16.527977],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado de villa tunari',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado de villa tunari</strong><p>Direccion: <br>A. Jose de Sucre 36, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.497029, -68.195814">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.195814, -16.497029],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial gladys',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial gladys</strong><p>Direccion: <br>Max Paredes 443, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.496073, -68.145213">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.145213, -16.496073],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial gran poder',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial gran poder</strong><p>Direccion: <br>Av. San Jose 2255, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.488754, -68.161037">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.161037, -16.488754],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial jackelin',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial jackelin</strong><p>Direccion: <br>Yungas 726, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.4970995, -68.1293759">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1293759, -16.4970995],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial juana',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial juana</strong><p>Direccion: <br>C.9 Cristobal Ramires 1519, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.51694613, -68.2003298">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.2003298, -16.51694613],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial karen',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial karen</strong><p>Direccion: <br>Av. Marcelo Quiroga Sta. Cruz 3121, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.52299, -68.14358">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.14358, -16.52299],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial lourdes',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial lourdes</strong><p>Direccion: <br>C. E. Mendez 219, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.545381, -68.061108">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.061108, -16.545381],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial luz',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial luz</strong><p>Direccion: <br>Unnamed Road, Viacha, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.65317, -68.299856">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.299856, -16.65317],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial mari',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial mari</strong><p>Direccion: <br>Av. B 1466, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.558745, -68.192891">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.192891, -16.558745],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial maria',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial maria</strong><p>Direccion: <br>Hermano Morales 1335, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5248283, -68.1505578">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1505578, -16.5248283],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial matilde',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial matilde</strong><p>Direccion: <br>FRRQ+V7J, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5079594, -68.1618441">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1618441, -16.5079594],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial nathalia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial nathalia</strong><p>Direccion: <br>Av. 31 de Octubre 1542, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.496196, -68.116526">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.116526, -16.496196],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial paty',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial paty</strong><p>Direccion: <br>Puente Villa 1488, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.4795769, -68.1199886">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1199886, -16.4795769],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial regina',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial regina</strong><p>Direccion: <br>Unnamed Road, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.53195, -68.13">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.13, -16.53195],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial rosa',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial rosa</strong><p>Direccion: <br>Ave de las Americas 80, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.4800162, -68.1210287">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1210287, -16.4800162],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial rosa quispe',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial rosa quispe</strong><p>Direccion: <br>591 69731608 El Alto - Villa Adela - Plan 560 - Mazno 320, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5205861, -68.2108105">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.2108105, -16.5205861],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial rosmery',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial rosmery</strong><p>Direccion: <br>FVRQ+JP2, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5086, -68.11089">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.11089, -16.5086],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial san jorge',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial san jorge</strong><p>Direccion: <br>C. Ocobaya 26, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.4788945, -68.1204466">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1204466, -16.4788945],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial sofia',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial sofia</strong><p>Direccion: <br>Av. Hector Ormachea 6161, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.529672, -68.102625">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.102625, -16.529672],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial teresita',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial teresita</strong><p>Direccion: <br>Dentro del mercado kollasuyo, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.495302, -68.116619">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.116619, -16.495302],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial tito',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial tito</strong><p>Direccion: <br>Av Antofagasta 1026, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5078798, -68.1591777">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.1591777, -16.5078798],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial verito',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial verito</strong><p>Direccion: <br>CRP3+7R6, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.56403, -68.19482">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.19482, -16.56403],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial vicky',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial vicky</strong><p>Direccion: <br>PARADA DEL MINIBUS 210, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.51295, -68.10737">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.10737, -16.51295],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial yola',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial yola</strong><p>Direccion: <br>FRGX+5XM, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.524573, -68.150481">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.150481, -16.524573],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frialmercedes',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frialmercedes</strong><p>Direccion: <br>Av. Luis Espinal Nro 80, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.491097, -68.207763">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.207763, -16.491097],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'La quesoteca sopocachi',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>La quesoteca sopocachi</strong><p>Direccion: <br>Guachalla 513, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.509099, -68.129467">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.129467, -16.509099],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Martha cruz',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Martha cruz</strong><p>Direccion: <br>Pedro Villca A, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.5575151, -68.2112805">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.2112805, -16.5575151],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Mercado kollasuyo',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Mercado kollasuyo</strong><p>Direccion: <br>Esteban Arce 1843, La Paz, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.495368, -68.116728">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.116728, -16.495368],
              },
            },
            {
              type: 'Feature',
              properties: {
                title: 'Frial rosmeri',
                icon: 'mapbox-marker-icon-orange',
                description:
                  '<strong>Frial rosmeri</strong><p>Direccion: <br>FRQP+XP3, El Alto, Bolivia <a target="_blank" href="https://www.google.com/maps/place/-16.510099, -68.163163">abrir en Google Maps</a></p>',
              },
              geometry: {
                type: 'Point',
                coordinates: [-68.163163, -16.510099],
              },
            },
            // fin lp
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
          center: [-68.1224022, -16.5020441],
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
      var ea = document.getElementById('ea')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-68.169182, -16.523166],
          zoom: 12,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });
      var via = document.getElementById('via')!.addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        this.mapa.flyTo({
          center: [-68.301571, -16.653511],
          zoom: 15,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });

      this.mapa.addControl(new mapboxgl.FullscreenControl());
    });
  }
}
