import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './ruta/calculadora/calculadora.component';
import { ConversionComponent } from './ruta/conversion/conversion.component';

const routes: Routes = [
  {path:"", component:CalculadoraComponent},
  {path:"cornvertidor", component:ConversionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
