import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  listado = new Array<Mascota>();
  constructor(private fb: FormBuilder,
    private share: ShareDataService,
    private router: Router,
    private backend: BackendService) { 
    this.formGroup = this.fb.group({
      nombre: '',
      nacimiento: '',
      raza: ''
    })
  }

  ngOnInit(): void {
  }

  borrarFormulario(){
    this.formGroup.patchValue({
      nombre: '',
      nacimiento: '',
      raza: ''
    })
  }

  saveMascota(){
    /*
    this.listado.push(new Mascota(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['nacimiento'].value,
      this.formGroup.controls['raza'].value   
    ))
    console.log(this.listado);
    this.share.setlistadoMascota(this.listado);*/
    let mascota = new Mascota(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['nacimiento'].value,
      this.formGroup.controls['raza'].value   
    );
    this.backend.insertarMascota(mascota).subscribe(x => {
      console.log("Respuesta : " + x);
      alert(x.mensaje);
      this.borrarFormulario();
    });
  }

  verListado(){
    this.router.navigateByUrl('/listado');
  }

}
