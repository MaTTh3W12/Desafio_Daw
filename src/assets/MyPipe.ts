import { Pipe,PipeTransform } from '@angular/core';
import { Libro } from './../Servicios/Libro';

//Pipe encargado de buscar elementos
@Pipe({
    name: 'FilterBy'
})
export class FilterByPipe implements PipeTransform{
    transform(Libros:Libro[],searchterm:string,orderby:string):Libro[]{
        return Libros.filter(Libro =>
            (Libro.titulo.toLocaleLowerCase().indexOf(searchterm.toLocaleLowerCase()) !== -1));
        }
}
//Pipe encargado de Ordenar los elementoss
@Pipe({
    name:'OrderBy'
})
export class OrderBy implements PipeTransform{

    transform(Libros:Libro[],orderby:string):Libro[]{
        if(orderby == "titulo"){
        Libros.sort((a,b) => (a.titulo > b.titulo) ? 1 : ((b.titulo > a.titulo) ? -1 : 0));
        return Libros;
        }//If
        if(orderby == "editorial"){
            Libros.sort((a,b) => (a.editorial > b.editorial) ? 1 : ((b.editorial > a.editorial) ? -1 : 0));
            return Libros;
            }//If
    }
}