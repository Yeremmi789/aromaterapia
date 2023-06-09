import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './modulos/pages/productos/general/general.component';
import { DetallesComponent } from './modulos/pages/productos/detalles/detalles.component';
import { PreguntasFrecuentesComponent } from './modulos/pages/productos/general/preguntas-frecuentes/preguntas-frecuentes.component';

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
    path: 'preguntasfrecuentes',
    component:PreguntasFrecuentesComponent,
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
