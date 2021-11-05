import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Iproject } from '../iproject';

@Component({
  selector: 'app-modal-info-project',
  templateUrl: './modal-info-project.component.html',
  styleUrls: ['./modal-info-project.component.scss']
})
export class ModalInfoProjectComponent implements OnInit {

  projectTitulo: string;
  projectContent: string;
  
  constructor(public modalRef: MdbModalRef<ModalInfoProjectComponent>) {
    
  }

  ngOnInit(): void {

  }

}
