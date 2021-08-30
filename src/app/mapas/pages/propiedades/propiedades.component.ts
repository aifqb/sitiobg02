import { Component, OnInit } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
  enlace: string;
}


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {

  propiedades: Propiedad[] = [
    {
      titulo: 'Casa residencial, Canadá',
      descripcion: 'Frial x, Canadá',
      lngLat: [ -68.072882, -16.535059],
      enlace: 'https://goo.gl/maps/oy97RVKSRNja5Tvh8'
    },
    {
      titulo: 'Casa de playa, México',
      descripcion: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -68.150479, -16.524773],
      enlace: 'asd'
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ],
      enlace: 'asd'
    },
    {
      titulo: 'Local comercial, España',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ],
      enlace: 'asd',
    },
  ]

}
