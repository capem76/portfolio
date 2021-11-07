import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ModalInfoProjectComponent } from "./modal-info-project/modal-info-project.component";
import { MdbModalRef, MdbModalService } from "mdb-angular-ui-kit/modal";
import { Iproject } from './iproject';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";





@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  modalRef: MdbModalRef<ModalInfoProjectComponent>;
  private _domainLink: string = "http://www.c-pena.com"

  private _project1: Iproject = {
    tituloProject: "",
    contentProject: "",
    pictureProject: "assets/img/projets/screenshot_filmsapp-938x533.png",
    linkProject: this._domainLink + "/filmsApp/#/home"
  };  
    
  private _project2: Iproject = {
    tituloProject: "",
    contentProject: "",
    pictureProject: "assets/img/projets/screenshot_facturasapp-942x480.png",
    linkProject: this._domainLink + "/clientes-app/#/clientes"
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
      this._project1.tituloProject = res;          
    });

    this.translate.get('PROJECTS.PROJECT1.CONTENT1').subscribe( ( res:[] ) => {      
      this._project1.contentProject = res.join(' ');    
    });

    this.translate.get('PROJECTS.PROJECT2.TITLE2').subscribe( ( res:string ) => {
      this._project2.tituloProject = res;          
    });

    this.translate.get('PROJECTS.PROJECT2.CONTENT2').subscribe( ( res:[] ) => {      
      this._project2.contentProject = res.join(' ');    
    });

  }

  dameProjects():Array<Iproject> {

    let projects: Array<Iproject> = new Array<Iproject>();  
    projects.push( this._project1, this._project2 );

    return projects;

  }

 

  

  

  

}
