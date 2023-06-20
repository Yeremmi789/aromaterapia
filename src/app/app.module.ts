import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './modulos/pages/productos/general/general.component';
import { DetallesComponent } from './modulos/pages/productos/detalles/detalles.component';
import { ModulosModule } from './modulos/modulos.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    HttpClientModule,
    RouterModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
