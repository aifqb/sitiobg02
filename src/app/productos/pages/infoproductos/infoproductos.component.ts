import { Component, OnInit } from '@angular/core';

export interface Sanjuan {
  "codigodeItem":         number;
  "nombreProducto":       string;
  "unidades":             number;
  "pesoGr.":              number;
  "PrecioCalc":           number;
  "PrecioFinal":          number;
  "tamanoCm":             number;
  "vigente":              string;
}


@Component({
  selector: 'app-infoproductos',
  templateUrl: './infoproductos.component.html',
  styleUrls: ['./infoproductos.component.css']
})
export class InfoproductosComponent {

  productos: Sanjuan[] = [
    {
     "codigodeItem": 38,
     "nombreProducto": "Salchicha sin piel viena de 22 cm - a granel",
     "unidades": 16,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 24.5,
     "tamanoCm": 22,
     "vigente": "true"
    },
    {
     "codigodeItem": 39,
     "nombreProducto": "Salchicha sin piel viena de 22 cm - envasado 1 kg",
     "unidades": 16,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 25,
     "tamanoCm": 22,
     "vigente": "true"
    },
    {
     "codigodeItem": 97,
     "nombreProducto": "Salchicha sin piel viena de 22 cm - envasado 500 gr",
     "unidades": 8,
     "pesoGr.": 500,
     "PrecioCalc": 12.5,
     "PrecioFinal": 13,
     "tamanoCm": 22,
     "vigente": "true"
    },
    {
     "codigodeItem": 172,
     "nombreProducto": "Salchicha sin piel viena de 22 cm - sachet 800 gr",
     "unidades": 12,
     "pesoGr.": 780,
     "PrecioCalc": 19.5,
     "PrecioFinal": 20,
     "tamanoCm": 22,
     "vigente": "true"
    },
    {
     "codigodeItem": 119,
     "nombreProducto": "Salchicha sin piel viena de 17 cm - a granel",
     "unidades": 21,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 25,
     "tamanoCm": 17,
     "vigente": "true"
    },
    {
     "codigodeItem": 108,
     "nombreProducto": "Salchicha sin piel viena de 17 cm - envasado 1 kg",
     "unidades": 21,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 25,
     "tamanoCm": 17,
     "vigente": "true"
    },
    {
     "codigodeItem": 112,
     "nombreProducto": "Salchicha sin piel viena de 14 cm - envasado 1 kg",
     "unidades": 22,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 25,
     "tamanoCm": 14,
     "vigente": "true"
    },
    {
     "codigodeItem": 113,
     "nombreProducto": "Salchicha sin piel viena de 14 cm - envasado 500 gr",
     "unidades": 12,
     "pesoGr.": 500,
     "PrecioCalc": 12.5,
     "PrecioFinal": 13,
     "tamanoCm": 14,
     "vigente": "true"
    },
    {
     "codigodeItem": 165,
     "nombreProducto": "Salchicha sin piel viena de 14 cm - sachet 250 gr",
     "unidades": 6,
     "pesoGr.": 250,
     "PrecioCalc": 6.3,
     "PrecioFinal": 6.5,
     "tamanoCm": 14,
     "vigente": "true"
    },
    {
     "codigodeItem": 73,
     "nombreProducto": "Salchicha con piel pop - a granel",
     "unidades": 26,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 24,
     "tamanoCm": 12,
     "vigente": "true"
    },
    {
     "codigodeItem": 137,
     "nombreProducto": "Salchicha con piel rosada pop - a granel",
     "unidades": 26,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 24,
     "tamanoCm": 12,
     "vigente": "true"
    },
    {
     "codigodeItem": 43,
     "nombreProducto": "Salchicha con piel viena - a granel",
     "unidades": 26,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 24,
     "tamanoCm": 12,
     "vigente": "true"
    },
    {
     "codigodeItem": 44,
     "nombreProducto": "Salchicha con piel viena ahumada - a granel",
     "unidades": 26,
     "pesoGr.": 1000,
     "PrecioCalc": 25,
     "PrecioFinal": 24,
     "tamanoCm": 12,
     "vigente": "true"
    },
    {
     "codigodeItem": 94,
     "nombreProducto": "Salchicha sin piel viena de 10 cm - sachet 200 gr",
     "unidades": 12,
     "pesoGr.": 200,
     "PrecioCalc": 5,
     "PrecioFinal": 7,
     "tamanoCm": 10,
     "vigente": "true"
    }
  ]
  

}
