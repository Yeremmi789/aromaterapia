import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { Usuarios, Token } from '../s-modelos/Auth';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {


  private API_Laravel = environment.apiRest;


  private _usuario!: Usuarios;
  get usuario() {
    return { ...this._usuario }
  }

  constructor(
    private http:HttpClient,
    private router:Router,

  ) { }


  login(email: string, password: string) {
    const ruta_api = `${this.API_Laravel}/login`;
    const body = { email, password };
    return this.http.post<Token>(ruta_api, body)
      .pipe(
        tap(respuesta => {
          if (respuesta.ok) {
            localStorage.setItem('token', respuesta.token!)
            this._usuario = {
              name: respuesta.name!,
              id: respuesta.id!,
            }
            localStorage.setItem('user', JSON.stringify(respuesta));
          }
        }),
        map(resp => resp.ok),
        catchError(error => of(error.mssg))
      );
  }



}
