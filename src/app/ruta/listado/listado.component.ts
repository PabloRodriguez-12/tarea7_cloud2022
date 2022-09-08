import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/models/mascota';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  dataSource = new MatTableDataSource(new Array<Mascota>());
  displayedColumns = ['nombre', 'nacimiento', 'raza']
  constructor(private share: ShareDataService,
    private backend: BackendService) { }

  ngOnInit(): void {
    /*
    this.share.currentlistadoMascota.subscribe(listado => {
      this.dataSource.data = listado;
    });*/
    this.backend.obtenerMascota().subscribe( x =>{
      /*this.dataSource.data.push(x.datos)*/
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
