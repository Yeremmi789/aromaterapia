import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  // formLogin: FormGroup;
  // constructor(
  //   private router: Router,
  //   private contr_form: FormBuilder,
  //   private authServices:AutorizacionService,
  // ) {
  //   this.formLogin = this.contr_form.group({
  //     name: [''],
  //     password: ['']
  //   });
  // }


  ngOnInit(): void {
    // this.checkLocalStorage();
  }

  // login(){
  //   const {name,password} = this.formLogin.value;
  //     this.authServices.login(name, password)
  //       .subscribe(resp => {
  //         // console.log(resp);
  //         if( resp === true ){
  //           this.router.navigate(['/personal'])
  //           .then(() => {
  //             location.reload();
  //             this.mensaje.success(":)","Bienvenido",{
  //               timeOut:5000,
  //             });
  //           });
  //         }else{
  //           // Swal.fire('Algo salio mal','Verifique sus datos, porfavor', 'error');
  //           this.mensaje.warning("Verifique sus datos","Algo salió mal",{
  //             timeOut:10000,
  //             // positionClass: 'toast-top-right',
  //           });
  //         }
  //         return console.log(this.formLogin.value);
  //       })
  //     ;
  // }
}
