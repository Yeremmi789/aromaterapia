import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './pages/productos/detalles/detalles.component';
import { GeneralComponent } from './pages/productos/general/general.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    DetallesComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    
  ]
})
export class ModulosModule { }
