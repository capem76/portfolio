import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICertificado } from './icertificado';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { Subscription } from 'rxjs';
import { ModalCertificadoComponent } from "./modal-certificado/modal-certificado.component";
import { MdbModalRef, MdbModalService } from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent implements OnInit, OnDestroy {

  private subscritions: Subscription[] = [];
  modalRef: MdbModalRef<ModalCertificadoComponent>;

 private _developpeurWeb: ICertificado = {
   titulo: "",
   descripcion: "",
   duracion: "",
   lugar: "",
   fechaTermino: "09-2019",
   urlImagen: "",
   imagenSmall: "assets/img/certifica2/developeur-web-small-fr.png"
 }

 private _angularCero: ICertificado = {
  titulo: "",
  descripcion: "",
  duracion: "35,5 hrs",
  lugar: "",
  fechaTermino: "05-2021",
  urlCopia: "https://www.udemy.com/certificate/UC-e4e42e3a-d6ca-44aa-abf8-b1031db2d517/",
  urlImagen: "",
  imagenSmall: "assets/img/certifica2/angular-de-cero-a-experto-small-en.png"
}

private _angularSpring: ICertificado = {
  titulo: "",
  descripcion: "",
  duracion: "23,5 hrs",
  lugar: "",
  fechaTermino: "06-2021",
  urlCopia: "https://www.udemy.com/certificate/UC-e3547345-72b3-401e-831d-9c2f5fa3b186/",
  urlImagen: "",
  imagenSmall: ""
}

  constructor(  private translate: TranslateService,
                private modalService: MdbModalService ) { 
    this.getTransalet();
  }
  
  ngOnInit(): void {
    this.translate.onLangChange.subscribe( ( event: LangChangeEvent) =>{
      this.getTransalet();
    });
  }

  
  getTransalet(){

    let certificado1: string = "CERTIFICACIONES.certificado1";

    this.subscritions.push(      
      this.translate.get( certificado1 + '.title').subscribe( ( res: string ) => {
        this._developpeurWeb.titulo = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.urlImagen').subscribe( ( res: string ) => {
        this._developpeurWeb.urlImagen = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.duracion').subscribe( ( res: string ) => {
        this._developpeurWeb.duracion = "6 " + res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.imagenSmall').subscribe( ( res: string ) => {
        this._developpeurWeb.imagenSmall = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.desc').subscribe( ( res: [] ) => {
        this._developpeurWeb.descripcion = res.join(' ');
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.subtitle').subscribe( ( res: string ) => {
        this._developpeurWeb.lugar = res
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.title').subscribe( ( res: string ) => {
        this._angularCero.titulo = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.urlImagen').subscribe( ( res: string ) => {
        this._angularCero.urlImagen = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.imagenSmall').subscribe( ( res: string ) => {
        this._angularCero.imagenSmall = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.desc').subscribe( ( res: [] ) => {
        this._angularCero.descripcion = res.join(' ');
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.subtitle').subscribe( ( res: string ) => {
        this._angularCero.lugar = res
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.title').subscribe( ( res: string ) => {
        this._angularSpring.titulo = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.urlImagen').subscribe( ( res: string ) => {
        this._angularSpring.urlImagen = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.imagenSmall').subscribe( ( res: string ) => {
        this._angularSpring.imagenSmall = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.desc').subscribe( ( res: [] ) => {
        this._angularSpring.descripcion = res.join(' ');
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.subtitle').subscribe( ( res: string ) => {
        this._angularSpring.lugar = res
      })
    );

    
  }

  dameCertificaciones(): Array<ICertificado>{

    let certifica2: Array<ICertificado> = new Array<ICertificado>();
    certifica2.push( this._developpeurWeb, this._angularCero, this._angularSpring );

    return certifica2;
  }

  
  openModal( certificado: ICertificado ){
    let config = {
      animation: true, 
      ignoreBackdropClick: false, 
      backdrop: true,    
      data: {
        urlImagen: certificado.urlImagen,
        modalTitle: certificado.titulo        
      },
      keyboard: true,
      modalClass: 'modal-fullscreen'
      
      
    }
    this.modalRef = this.modalService.open( ModalCertificadoComponent, config );
  }
  
  
  ngOnDestroy(): void {
   this.subscritions.forEach( subscrition => {
     subscrition.unsubscribe();
   }) 
  }
}
