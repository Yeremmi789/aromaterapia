import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { informacion } from 'src/app/s-modelos/ArchivosFire';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-enviar-info',
  templateUrl: './enviar-info.component.html',
  styleUrls: ['./enviar-info.component.css']
})
export class EnviarInfoComponent implements OnInit{

  // formPrueba: FormGroup;

  formPrueba:FormGroup = new FormGroup({});

  constructor(
    private contr_form: FormBuilder,
    private authServices:AutorizacionService,
    private router:Router,
    private enviarService:FirebaseService
  ) {
    this.formPrueba = this.contr_form.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  enviar():any{
    this.enviarService.guardarInformacion(this.formPrueba.value).subscribe(
      respuesta => {
        console.log("Se presionó");
      }
    )

    this.router.navigate(['/'])
  }


  info:informacion[] = [];
  datos:any;

  ngOnInit(): void {
    console.log("Mensaje cargado ")
    // console.log(this.enviarService.obtenerInformacion())
    this.enviarService.obtenerInformacion().subscribe(
      respuestas =>{
        console.log("Dentro del console XD")
        console.log(respuestas)
        this.datos=respuestas;
      }
    )

  }


}
