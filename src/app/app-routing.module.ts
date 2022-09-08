import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ruta/ingreso/ingreso.component';
import { ListadoComponent } from './ruta/listado/listado.component';
import { MascotaComponent } from './ruta/mascota/mascota.component';

const routes: Routes = [
  {path:'', component: IngresoComponent},
  {path:'listado', component: ListadoComponent},
  {path:'detalle', component: MascotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
