import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './pages/productos/detalles/detalles.component';
import { GeneralComponent } from './pages/productos/general/general.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnviarInfoComponent } from './pages/productos/enviar-info/enviar-info.component';




@NgModule({
  declarations: [
    DetallesComponent,
    GeneralComponent,
    HomeComponent,
    LoginComponent,
    EnviarInfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  exports:[
    
  ]
})
export class ModulosModule { }
