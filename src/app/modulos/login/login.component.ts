import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  constructor(
    private contr_form: FormBuilder,
    private authServices:AutorizacionService,
    private router:Router,

  ) {
    this.formLogin = this.contr_form.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    
  }


  login(){
    const {email,password} = this.formLogin.value;
      this.authServices.login(email, password)
        .subscribe(resp => {
          // console.log(resp);
          if( resp === true ){
            this.router.navigate(['/'])
            .then(() => {
              // location.reload();
              // this.mensaje.success(":)","Bienvenido",{
              //   timeOut:5000,
              // });
              console.log("Bienvenido, te haz logeado")
            });
          }else{
            // Swal.fire('Algo salio mal','Verifique sus datos, porfavor', 'error');
            // this.mensaje.warning("Verifique sus datos","Algo salió mal",{
            //   timeOut:10000,
            // });
            console.log("Hasta pronto, ha finalizado la sesion")
          }
          return console.log(this.formLogin.value);
        })
      ;
  }

}
