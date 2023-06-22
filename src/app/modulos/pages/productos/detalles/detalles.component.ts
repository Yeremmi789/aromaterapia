import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  constructor(
    private router:Router,
    private productoService:ProductosService,

    private route: ActivatedRoute //obtener datos del producto por el id
  ){}

  datos: any;
  id: any;

  usuarioId: number = 0;

  // img_url:any = "http://localhost:8000/public/";
  img_url:any = "http://localhost:8000/";

  cargarDatosUsuario() {
    this.productoService.id_product(this.id).subscribe(p => {
      console.log("HOLA XD")
      console.log(p)
      this.datos = p;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuarioId = +params['id'];
      this.obtenerUsuario(this.usuarioId);
      console.log("HOLAaaaaaaaaaaaaaaaa")
      console.log(this.usuarioId)
    });
  }


  nombre: string = "";
  correo: string = "";
  edad: number = 0;

  obtenerUsuario(id: number) {
    this.productoService.id_product(id).subscribe(
      response => {
        this.datos = response;
        console.log(this.datos)
        // this.nombre = response.name;
        // this.correo = response.correo;
        // this.edad = response.edad;
      },
      error => {
        console.error(error);
      }
    );
  }
}
