import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './inicio-sesion/login/login.component';
import { ConsumoApiComponent } from './consumo/consumo-api/consumo-api.component';
import { PermissionsGuard } from './guard/permissions.guard';
import { FormRegistroComponent } from './registro/form-registro/form-registro.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'buscarcomic',
    component:ConsumoApiComponent,canActivate:[PermissionsGuard]
  },
  {
    path:'registro',
    component:FormRegistroComponent
  }
]

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
  
})
export class AppRoutingModule { }
