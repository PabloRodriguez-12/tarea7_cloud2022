import { Mascota } from "./mascota";

export class MascotaResponse{
    status: number;
    mensaje: string;
    datos: Array<Mascota>;

    constructor(status: number, mensaje: string, datos: Array<Mascota>){
        this.status =  status;
        this.mensaje = mensaje;
        this.datos = datos;
    }

}