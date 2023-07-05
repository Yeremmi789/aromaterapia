import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gproductos } from '../s-modelos/Productos';
// import { Gproductos } from '../s-modelos/Productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_Laravel = environment.apiRest;
  private obt_productos = `${this.API_Laravel}/allProductos`;
  constructor(private http:HttpClient) { }

  private _res_pregunta!: Gproductos;

  obte_productos():Observable<any[]>{
    // const obtener_p = `${this.API_Laravel}/pedir`;
    return this.http.get<any>(this.obt_productos);
  }

  id_product(id: number):Observable<any>{
    const link  = `${this.API_Laravel}/detalles/${id}`;
    // return this.http.get<Gproductos>(link);
    return this.http.get<any>(link);
  }


}
