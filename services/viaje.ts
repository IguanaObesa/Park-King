export class Viaje {
    id_viaje: number;
    fecha_viaje: string;
    hora_salida: string;
    asientos_disp: number;
    costo: number;
    status:string;
    rol_usuario: number;
    //--------------------
    id_usuario: number;
    id_sede: number;
    //--------------------
    foto: Blob;
    nombre: string;
    //--------------------
    inicio: Blob;
    destino: Blob;
}