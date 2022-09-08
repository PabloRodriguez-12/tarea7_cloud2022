import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  numuno:number=0;
  numdos:number=0;
  res:number=0;
  mostrarmsj=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  sum(){
    this.res = this.numuno + this.numdos;
    this.mostrarmsj=true;
  }

  rest(){
    this.res = this.numuno - this.numdos;
    this.mostrarmsj=true;
  }

  mul(){
    this.res = this.numuno * this.numdos;
    this.mostrarmsj=true;
  }

  div(){
    this.res = this.numuno / this.numdos;
    this.mostrarmsj=true;
  }

}
