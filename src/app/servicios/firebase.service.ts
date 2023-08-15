import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { informacion } from '../s-modelos/ArchivosFire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http:HttpClient) { }

  // private urlFirebase = "https://websv1-7102d-default-rtdb.firebaseio.com/datos.json";
  private urlFirebase = "https://websv1-7102d-default-rtdb.firebaseio.com/datos.json";
  guardarInformacion(archivos:informacion):Observable<any>{

    // this.http.post("https://websv1-7102d-default-rtdb.firebaseio.com/",archivos).subscribe(
    // this.http.post("https://websv1-7102d-default-rtdb.firebaseio.com/datos.json",archivos).subscribe(
    //   respue => console.log("Se han guardado los empleados " + respue),
      
    //   error => console.log("Error " + error)
    // )
    // const url = "https://websv1-7102d-default-rtdb.firebaseio.com/datos.json"+archivos;
    // return this.http.post(url,archivos);
    return this.http.post(this.urlFirebase, archivos);
  }

  obtenerInformacion(){
    return this.http.get(this.urlFirebase)
  }


}
