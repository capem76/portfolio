import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ModalInfoProjectComponent } from "./modal-info-project/modal-info-project.component";
import { MdbModalRef, MdbModalService } from "mdb-angular-ui-kit/modal";
import { ProjectService } from './project.service';
import { Iproject } from './iproject';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";





@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  modalRef: MdbModalRef<ModalInfoProjectComponent>;


  project1: Iproject = {
    tituloProject: "",
    contentProject: ""
  };

  project2: Iproject = {
    tituloProject: "",
    contentProject: ""
  };

  
  constructor( 
      private modalService: MdbModalService,      
      private translate: TranslateService) {
    
    this.getTranslate();    
    
  }
  
  ngOnInit(): void {
    
    this.translate.onLangChange.subscribe( ( event: LangChangeEvent ) => {
     this.getTranslate();
    });
    
  }
  
  ngAfterViewInit(): void {      
    
  }

  
  openModal( project:Iproject ){
    let config = {
      data: {
        projectTitulo: project.tituloProject,
        projectContent: project.contentProject
      }
      
    }
    this.modalRef = this.modalService.open(ModalInfoProjectComponent, config);
  }
  
  getTranslate(){
    this.translate.get('PROJECTS.PROJECT1.TITLE1').subscribe( ( res:string ) => {
      this.project1.tituloProject = res;          
    });

    this.translate.get('PROJECTS.PROJECT1.CONTENT1').subscribe( ( res:[] ) => {      
      this.project1.contentProject = res.join(' ').slice(0,140) + "...";    
    });

    this.translate.get('PROJECTS.PROJECT2.TITLE2').subscribe( ( res:string ) => {
      this.project2.tituloProject = res;          
    });

    this.translate.get('PROJECTS.PROJECT2.CONTENT2').subscribe( ( res:[] ) => {      
      this.project2.contentProject = res.join(' ').slice(0,140) + "...";    
    });
  }


 

  

}
