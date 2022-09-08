import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  numcel:number=0;
  res:number=0;
  mostrarmsj = false;
  constructor() { }

  ngOnInit(): void {
  }

  conver(){
    this.res = (this.numcel * (9/5))+32;
    this.mostrarmsj=true;
  }

}
