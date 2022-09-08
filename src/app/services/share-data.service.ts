import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private listadoMascotaSource = new BehaviorSubject<Array<Mascota>>([]);
  currentlistadoMascota = this.listadoMascotaSource.asObservable();

  constructor() { }

  setlistadoMascota(listado: Array<Mascota>){
    this.listadoMascotaSource.next(listado);
  }

}
