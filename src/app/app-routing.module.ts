import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './modulos/pages/productos/general/general.component';
import { DetallesComponent } from './modulos/pages/productos/detalles/detalles.component';
import { HomeComponent } from './modulos/home/home.component';
import { LoginComponent } from './modulos/login/login.component';
import { EnviarInfoComponent } from './modulos/pages/productos/enviar-info/enviar-info.component';
import { CodigosComponent } from './modulos/pages/codigos/codigos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'productos/:id',
    component: DetallesComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'catalogo',
    component: GeneralComponent
  },
  {
    path: 'prueba',
    component: EnviarInfoComponent
  },
  {
    path: 'codigo',
    component: CodigosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
