import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioSesionModule } from './inicio-sesion/inicio-sesion.module';
import { ConsumoModule } from './consumo/consumo.module';
import { AppRoutingModule } from './app-routing.module';
import { RegistroModule } from './registro/registro.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    InicioSesionModule,
    RegistroModule,
    ConsumoModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
