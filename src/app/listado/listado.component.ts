import { Component,OnInit } from '@angular/core';
import { LibrosService } from '../../Servicios/libros.service';
import { Libro } from './../../Servicios/Libro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './listado.html',
  styleUrls: ['./css/listado.css']
})

export class ListadoComponent {
  Libros:Libro[]
  public searchterm:string = ""; //Guarda el termino de busqueda
  public orderby = "titulo"; //Guarda parametro para ordenar
  
  constructor(private _servicio:LibrosService,private router: Router){
    _servicio.getData()
    .then((d:Libro[])=>{
      this.Libros = d;
    });
  }
  MostrarData(e:any){
    console.log(e.target.id);
    this.router.navigate(['Datos/'+e.target.id]);
  }

  
}
