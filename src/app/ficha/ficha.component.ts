import { Component,OnInit } from '@angular/core';
import { LibrosService } from '../../Servicios/libros.service';
import { Libro } from './../../Servicios/Libro';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './ficha.html',
  styleUrls: ['./css/ficha.css']
})

export class FichaComponent implements OnInit {
  Libros:Libro[]
  public param = "";
    
  constructor(private _servicio:LibrosService,private router: Router,private CurrentRoute: ActivatedRoute){
    _servicio.getData()
    .then((d:Libro[])=>{
      this.Libros = d;
    });
  }
ngOnInit(){
    this.param = this.CurrentRoute.snapshot.params.Libro;   
    console.log(this.param);  
 };
volver(){
    this.router.navigate(['/Listado']);
}

  
}
