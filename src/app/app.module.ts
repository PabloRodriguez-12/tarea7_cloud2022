import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './ruta/calculadora/calculadora.component';
import { ConversionComponent } from './ruta/conversion/conversion.component';
import { MenuComponent } from './ruta/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ConversionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
