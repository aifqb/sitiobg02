export interface Puntoventa {
    Activo:          number;
    CiudadLocalidad: CiudadLocalidad;
    Departamento:    CiudadLocalidad;
    Direccion:       string;
    Google:          string;
    Id_Pv:           number;
    Latitud:         number;
    Longitud:        number;
    Mapbox:          string;
    NombrePv:        string;
    Orden:           number;
    Vendedor:        Vendedor;
    ZonaDistrito:    ZonaDistrito;
}

export enum CiudadLocalidad {
    Challapata = "Challapata",
    ElAlto = "El Alto",
    LaPaz = "La Paz",
    Oruro = "Oruro",
    Potosi = "Potosi",
    SantaCruz = "Santa Cruz",
    Tupiza = "Tupiza",
    Viacha = "Viacha",
}

export enum Vendedor {
    Alejandro = "Alejandro",
    Alex = "Alex",
    Jaime = "Jaime",
    Oscar = "Oscar",
    Simon = "Simon",
}

export enum ZonaDistrito {
    Distrito1 = "distrito 1",
}
