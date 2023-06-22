import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit{
  

  constructor (private productoService:ProductosService,
    private router:Router){

  }

  list_pro:any;
  img_url:any = "http://localhost:8000/public/";

  ngOnInit(): void {
    this.productoService.obte_productos()
      .subscribe(resp=>{
        console.log(resp);
        this.list_pro=resp;
      });
  }

  prod_detalles(prod_id:number){
    this.router.navigate(['/productos', prod_id]);
    // console.log("sola")
  }


}
