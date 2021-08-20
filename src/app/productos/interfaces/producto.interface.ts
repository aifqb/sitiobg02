export interface Producto {
  idPr:            number;
  producto_Nombre: string;
  grupoId:         number;
  cod_Item_PF:     number;
  menor_Nuevo:     string;
  presentacion:    string;
  proceso:         Proceso;
  peso_aprox:      number;
  vigente:         Vigente;
}

export enum Proceso {
  Lote = "Lote",
  Subproceso = "Subproceso",
}

export enum Vigente {
  Si = "si",
}
