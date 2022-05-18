import { Component, OnInit } from '@angular/core';
import { nuevoUsuario } from './interface/interface.registro';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent  {

  validacionCompleta=false;
  estadoValidacio=false;
  validacionCompos=false;
  mensajeErro="";
  EstadoContrasena=false;

  public nuevoUsuario:nuevoUsuario={
    Nombre:"",
    Apellidos:"",
    telefono:"",
    Email:"",
    Edad:0,
    Contrasena:"",
    ConfirmeCon:""

  }

  constructor(private api:ApiService) { }

  registro(){
 this.validarNombre();
     if(this.nuevoUsuario.Contrasena === this.nuevoUsuario.ConfirmeCon){
          console.log(this.nuevoUsuario)
          this.EstadoContrasena=false
        }else{this.EstadoContrasena=true;}
        
        if(this.validacionCompos=== true && this.EstadoContrasena==false){
          this.validacionCompleta=true
          

        }

  }


  validarNombre(){
    if(this.nuevoUsuario.Nombre.trim()!){
      this.estadoValidacio=false;
      this.mensajeErro="";
      if(this.nuevoUsuario.Apellidos.trim()!){
        this.estadoValidacio=false;
         this.mensajeErro="";
        if(this.nuevoUsuario.telefono.trim()!){
          this.estadoValidacio=false;
           this.mensajeErro="";
          if(this.nuevoUsuario.Email.trim()!){
            this.estadoValidacio=false;
            this.mensajeErro="";
            if(this.nuevoUsuario.Edad>0){
              this.estadoValidacio=false;
              this.mensajeErro="";
               if(this.nuevoUsuario.Contrasena.trim().length>5){
                  this.mensajeErro="";
                 this.estadoValidacio=false;
                 if(this.nuevoUsuario.ConfirmeCon.trim().length>5){
                  this.mensajeErro="";
                  this.estadoValidacio=false;
                  this.validacionCompos=true;

                 }else{
                  this.mensajeErro="Confirm contraseña no cumple con las caracteristicas"
                  this.estadoValidacio=true;
                 }
                


              }else{
              this.mensajeErro="contraseña no cumple con las caracteristicas"
              this.estadoValidacio=true;
              }


            }else{
            this.mensajeErro="Tienes que ser mayor de 12 años"
            this.estadoValidacio=true;
            }


          }else{
          this.mensajeErro="Campo email vacio"
          this.estadoValidacio=true;
          }


        }else{
        this.mensajeErro="Campo telefono vacio"
        this.estadoValidacio=true;
        }

      }else{
      this.mensajeErro="Campo Apellido  vacio"
      this.estadoValidacio=true;
      }

    }else{
      this.mensajeErro="Campo Nombre  vacio"
    this.estadoValidacio=true;
    }
    

  }

  

}
