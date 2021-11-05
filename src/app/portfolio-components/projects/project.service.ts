import { Injectable } from '@angular/core';
import { Iproject } from './iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _projectArray: Array<Iproject> = [];

  project1: Iproject = {
    tituloProject: 'Peliculas App',
    contentProject: [
      '<p>Aplicacion para buscar peliculas utilizando los servicios de la popular <b>TheMovieDB.</b>',
      'Se listan las peliculas mas populares comenzando por los estrenos recientes.<br>',
      'Esta app esta creada utilizando <b>Bootstrap 4.6 y Angular 10</b>. Para cambiar de idioma se utiliza',
      'la libreria <b>ngx-translate</b>. Para los slideshow se utiliza la libreria <b>Swiper</b>.',
      'Ademas operadores de Rxjs.</p>'].join(' ')
  }

  project2: Iproject = {
    tituloProject: 'Facturas App',
    contentProject: [
      '<p>SPA que se conecta mediante <b>servicios Rest</b> con el backend para crear, leer, actualizar y eliminar facturas de clientes.<br>',
      'La aplicacion esta creada con <b>Angular</b> en el front, utiliza Api Rest para comunicarse con el  Backend, el cual esta',
      'desarrollado con <b>Java, Springboot y MySql</b> como mpotor de Base de datos.'].join(' ')
  }
  
  
  constructor() { 
    this.agregaProject();
  }

  public get projectArray(): Array<Iproject> {
    return this._projectArray;
  }
  public set projectArray(value: Array<Iproject>) {
    this._projectArray = value;
  }

    

  agregaProject( ){
      this.projectArray.push(this.project1, this.project2);
  }


  retornaProjects(): Array<Iproject>{
    return this.projectArray;
  }




  
}

