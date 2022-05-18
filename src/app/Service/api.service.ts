import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../inicio-sesion/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   public estadoUsuario:boolean=false;
   public eventos:any=[];
   public comic:any=[];


  public usuarioActual={
    correo:"",
    contrasena:"",
    nombre:""
  }

  public usuarios:any=[
    {
      id:1,
      nombre:"miguel",
      apellidos:"Hernandez",
      correo:"miguel@gmail.com",
      contrasena:"123456",
      tel:11654252,
      fechaNcimiento:"12/03/1999"
    },
    {
      id:2,
      nombre:"manuel",
      apellidos:"Hernandez",
      correo:"manuel@gmail.com",
      contrasena:"123456",
      tel:53830729,
      fechaNcimiento:"12/03/1999"
    },
    {
      id:3,
      nombre:"monse",
      apellidos:"jimenez",
      correo:"monse@gmail.com",
      contrasena:"1234568",
      tel:55640563631,
      fechaNcimiento:"12/03/1999"
    }
  ]

   personaje(valor:string=""){
    this.http.get(`https://gateway.marvel.com:443/v1/public/characters?name=${valor}&limit=10&ts=1&apikey=42a1186ed0282e87d5ebf8e8689e9cd0&hash=226adcf22ec4f7263bf6047e6c761fab`).subscribe((resp:any)=>{
     
      this.eventos=resp.data.results[0].events.items;
      this.comic=resp.data.results[0].comics.items;
      console.log(this.comic);

    })
    return true;
  }

  

  inicioSesion(user:usuario){
    
    // revisa si exite en la base de datos
    for( let usurio of this.usuarios){
        if(usurio.correo === user.correo && usurio.contrasena === user.contrasena){
          this.estadoUsuario=true;
          this.usuarioActual.nombre=usurio.nombre;

        }
        if(this.estadoUsuario===true){
          this.router.navigate(['buscarcomic'])
        }
      

    }

  

    console.log(this.estadoUsuario);
    console.log(this.usuarioActual.nombre)

  
    


  }




  constructor(private http:HttpClient,private router:Router) { }
}
