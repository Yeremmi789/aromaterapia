import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './modulos/pages/productos/general/general.component';
import { DetallesComponent } from './modulos/pages/productos/detalles/detalles.component';
import { ModulosModule } from './modulos/modulos.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulosModule,
    SharedModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FormsModule,

    // Si la página no carga - se queda en blanco, es poque este modulo http está ausente
    HttpClientModule
    // Si la página no carga - se queda en blanco, es poque este modulo http está ausente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
