import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { informacion } from 'src/app/s-modelos/ArchivosFire';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { PlacesService } from 'src/app/servicios/places.service';

@Component({
  selector: 'app-enviar-info',
  templateUrl: './enviar-info.component.html',
  styleUrls: ['./enviar-info.component.css']
})
export class EnviarInfoComponent implements OnInit{

  // formPrueba: FormGroup;

  formPrueba:FormGroup = new FormGroup({});
  newPlaceData: informacion = { nombre: '', descripcion: '' }; // Datos modificados
  constructor(
    private contr_form: FormBuilder,
    private authServices:AutorizacionService,
    private router:Router,
    private enviarService:FirebaseService,

    private SerPlaces:PlacesService
  ) {
    this.formPrueba = this.contr_form.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  // enviar():any{
  //   this.enviarService.guardarInformacion(this.formPrueba.value).subscribe(
  //     respuesta => {
  //       console.log("Se presionó");
  //     }
  //   )

  //   this.router.navigate(['/'])
  // }


  enviar():any{

    console.log(this.formPrueba.value)
    this.SerPlaces.addPlace(this.formPrueba.value);
    
    

    // this.enviarService.guardarInformacion(this.formPrueba.value).subscribe(
    //   respuesta => {
    //     console.log("Se presionó");
    //   }
    // )

    // this.router.navigate(['/'])
  }


  info:informacion[] = [];
  datos:any;

  // ngOnInit(): void {
  //   console.log("Mensaje cargado ")
  //   // console.log(this.enviarService.obtenerInformacion())
  //   this.enviarService.obtenerInformacion().subscribe(
  //     respuestas =>{
  //       console.log("Dentro del console XD")
  //       console.log(respuestas)
  //       this.datos=respuestas;
  //     }
  //   )

  // }
  
  ngOnInit(): void {
    console.log("Mensaje cargado ")
    this.SerPlaces.getPlaces().subscribe(p => {
      console.log(p);
      this.datos = p;
    })
  }

  placs: informacion[] = [];

  async deleteItem(place:informacion){
    // deleteItem(place:informacion){
    console.log("Presionó para BORRAR");
    // this.SerPlaces.deletePlace(place);
    const respon = await this.SerPlaces.deletePlace(place);
    console.log(respon);
  }


  updatePlace() {
    // Actualizar el lugar utilizando los datos modificados
    this.SerPlaces.updatePlace(this.newPlaceData)
      .then(() => {
        console.log('Lugar actualizado exitosamente');
        // Realizar otras acciones después de la actualización si es necesario
      })
      .catch((error) => {
        console.error('Error al actualizar el lugar:', error);
      });
  }


  obtInfo(newData: informacion) {
    this.SerPlaces.updatePlace(newData)
      .then(() => {
        console.log('Lugar actualizado exitosamente');
        // Realizar otras acciones después de la actualización si es necesario
      })
      .catch((error) => {
        console.error('Error al actualizar el lugar:', error);
      });
  }


}
