import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { LoginComponent } from '../inicio-sesion/login/login.component';



@NgModule({
  declarations: [
    ConsumoApiComponent
  ],
  imports: [
    CommonModule
   
  ],
  exports:[
    ConsumoApiComponent
  ]
})
export class ConsumoModule { }
