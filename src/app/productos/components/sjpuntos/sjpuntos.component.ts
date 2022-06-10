import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Depto {
  lugar: string;
}

interface puntoVenta {
  nombre: string;
  zona: string;
  coordenadas: string,
  departamento: string
}



@Component({
  selector: 'app-sjpuntos',
  templateUrl: './sjpuntos.component.html',
  styleUrls: ['./sjpuntos.component.css'],
})
export class SjpuntosComponent implements OnInit {
  departamentos: Depto[] = [
    {
      lugar: 'la paz',
    },
    {
      lugar: 'oruro',
    },
    {
      lugar: 'cochabamba',
    },
    {
      lugar: 'santa cruz',
    },
  ];

  puntos: puntoVenta[] = [
    {
      "nombre": "El palacio de los embutidos I",
      "zona": "miraflores",
      "coordenadas": "-16.501608626440984, -68.12207229999999",
      "departamento": "La paz"
    },
    {
      "nombre": "El palacio de los embutidos II",
      "zona": "sopocachi",
      "coordenadas": "-16.508898412453576, -68.12940262698844",
      "departamento": "La paz"

    },
    {
      "nombre": "todo queso",
      "zona": "este",
      "coordenadas": "-17.978956188858685, -67.1042844288365",
      "departamento": "Oruro"

    },
    {
      "nombre": "mercado campero",
      "zona": "centro",
      "coordenadas": "-17.97075072687813, -67.1102207",
      "departamento": "Oruro"

    },
    {
      "nombre": "mercado bolivar",
      "zona": "centro",
      "coordenadas": "-17.971911817094192, -67.104916542327",
      "departamento": "Oruro"

    },
    {
      "nombre": "mercado young",
      "zona": "sur",
      "coordenadas": "-17.978584380794885, -67.13266779564377",
      "departamento": "Oruro"

    },
    {
      "nombre": "ole quesito",
      "zona": "entre 4 y 5 anillo",
      "coordenadas": "-17.74324604034698, -63.17667237115282",
      "departamento": "Santa cruz"

    }
  ]


  constructor(private router: Router ) { }

  ngOnInit(): void { }
  regresar(){
    this.router.navigate(['mapas/puntosdeventa'])
  }
}
