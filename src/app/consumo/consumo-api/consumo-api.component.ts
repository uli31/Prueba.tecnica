import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css']
})
export class ConsumoApiComponent  {

@ViewChild('textBuscar')textBuscar!:ElementRef<HTMLInputElement>;
  valor:string=""

buscar (){
  this.valor= this.textBuscar.nativeElement.value;
  if(this.valor.trim().length===0){
       return ;
  } 
 this.service.personaje(this.valor);

 this.textBuscar.nativeElement.value="";
 
 
};

get eventos(){
  return this.service.eventos;
}

get comics(){
  return this.service.comic;
}

 
 

  constructor(private service:ApiService) { }

  

}
