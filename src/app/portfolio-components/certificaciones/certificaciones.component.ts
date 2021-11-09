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

 private _certificado1: ICertificado = {
   titulo: "",
   descripcion: "",
   duracion: "6 meses",
   lugar: "",
   fechaTermino: "09-2019",
   urlImagen: ""
 }

 private _certificado2: ICertificado = {
  titulo: "",
  descripcion: "",
  duracion: "35,5 hrs",
  lugar: "",
  fechaTermino: "05-2021",
  urlCopia: "https://www.udemy.com/certificate/UC-e4e42e3a-d6ca-44aa-abf8-b1031db2d517/",
  urlImagen: ""
}

private _certificado3: ICertificado = {
  titulo: "",
  descripcion: "",
  duracion: "23,5 hrs",
  lugar: "",
  fechaTermino: "06-2021",
  urlCopia: "https://www.udemy.com/certificate/UC-e3547345-72b3-401e-831d-9c2f5fa3b186/",
  urlImagen: ""
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

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.title').subscribe( ( res: string ) => {
        this._certificado1.titulo = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.urlImagen').subscribe( ( res: string ) => {
        this._certificado1.urlImagen = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.desc').subscribe( ( res: [] ) => {
        this._certificado1.descripcion = res.join(' ');
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado1.subtitle').subscribe( ( res: string ) => {
        this._certificado1.lugar = res
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.title').subscribe( ( res: string ) => {
        this._certificado2.titulo = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.urlImagen').subscribe( ( res: string ) => {
        this._certificado2.urlImagen = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.desc').subscribe( ( res: [] ) => {
        this._certificado2.descripcion = res.join(' ');
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado2.subtitle').subscribe( ( res: string ) => {
        this._certificado2.lugar = res
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.title').subscribe( ( res: string ) => {
        this._certificado3.titulo = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.urlImagen').subscribe( ( res: string ) => {
        this._certificado3.urlImagen = res;
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.desc').subscribe( ( res: [] ) => {
        this._certificado3.descripcion = res.join(' ');
      })
    );

    this.subscritions.push(
      this.translate.get('CERTIFICACIONES.certificado3.subtitle').subscribe( ( res: string ) => {
        this._certificado3.lugar = res
      })
    );

    
  }

  dameCertificaciones(): Array<ICertificado>{

    let certifica2: Array<ICertificado> = new Array<ICertificado>();
    certifica2.push( this._certificado1, this._certificado2, this._certificado3 );

    return certifica2;
  }

  ngOnDestroy(): void {
   this.subscritions.forEach( subscrition => {
     subscrition.unsubscribe();
   }) 
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

}
