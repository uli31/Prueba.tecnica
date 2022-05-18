import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import{RecaptchaModule} from 'ng-recaptcha';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecaptchaModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class InicioSesionModule { }
