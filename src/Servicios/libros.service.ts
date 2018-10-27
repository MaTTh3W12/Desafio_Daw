import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Libro } from './Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
    constructor(private http:HttpClient) {
    console.log("Servicio Funcionando");
  }

   getData(){
    return this.http.get("./../assets/Libros.json").toPromise();
   }
}
