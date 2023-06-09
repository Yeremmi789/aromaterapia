import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './modulos/pages/productos/general/general.component';
import { DetallesComponent } from './modulos/pages/productos/detalles/detalles.component';
import { LoginComponent } from './modulos/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    pathMatch: 'full',
  },
  {
    path: 'productos',
    component: DetallesComponent,
  },
  {
    path: 'login',
    component: LoginComponent
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
