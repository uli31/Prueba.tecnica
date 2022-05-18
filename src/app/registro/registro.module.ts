import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormRegistroComponent
  ]
})
export class RegistroModule { }
