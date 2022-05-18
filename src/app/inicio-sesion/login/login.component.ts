import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { usuario } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  private captchat:string="";
   captchatEstado:boolean=false;

  usuario:usuario={
    correo:"",
    contrasena:""
  }

  login(){
    if(this.captchat===""){
      this.captchatEstado=true;
      
    }else
    this.service.inicioSesion(this.usuario);    
  }

  


  revisarCapptchat(captchatResponse:string){
    this.captchatEstado=false;

    this.captchat=captchatResponse;
  }

  constructor(private service:ApiService) {
   }

  

}
