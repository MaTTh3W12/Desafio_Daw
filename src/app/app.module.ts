import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Para enrutamiento
import { RouterModule, Routes } from '@angular/router';
//Para obtener el JSON
import {HttpClient, HttpClientModule} from '@angular/common/http';
//Pipes
import { FilterByPipe} from './../assets/MyPipe';
import { OrderBy } from './../assets/MyPipe';
//Servicios
import {LibrosService} from '../Servicios/libros.service';
//Componentes
import { AppComponent } from './app/app.component';
import { ListadoComponent } from './listado/listado.component';
import { FichaComponent } from './ficha/ficha.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'Listado', component:ListadoComponent },
  { path: 'Datos/:Libro',component:FichaComponent},
  { path:'**',redirectTo:'/Inicio',pathMatch:'full'} /* Ruta por defecto */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoComponent,
    FichaComponent,
    FooterComponent,
    FilterByPipe,
    OrderBy,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent],

})
export class AppModule { }
