import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-modal-certificado',
  templateUrl: './modal-certificado.component.html',
  styleUrls: ['./modal-certificado.component.scss']
})
export class ModalCertificadoComponent implements OnInit {

  urlImagen: string;
  modalTitle: string;

  constructor( public modalRef: MdbModalRef<ModalCertificadoComponent> ) { }


  ngOnInit(): void {    
  }

}
