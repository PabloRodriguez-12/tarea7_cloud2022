import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mascota } from '../models/mascota';
import { MascotaResponse } from '../models/MascotaResponse';

const BE_API = environment.api_backend;
const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  insertarMascota(mascota: Mascota){
    console.log(BE_API + '/mascotas');
    return this.httpClient.post<MascotaResponse>(BE_API + '/mascotas', mascota, httpOptions );
  }

  obtenerMascota(){
    return this.httpClient.get<MascotaResponse>(BE_API + '/mascotas', httpOptions);
  }
}
