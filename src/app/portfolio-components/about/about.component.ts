import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  descriptionContext: string = "Me llamo <strong>Cristian</strong>"+
      " Soy origen chileno, mi naturaleza inquieta me ha llevado a vivir desde el 2008 fuera de mi pais, actualmente vivo en Francia."+
      " Me gusta aprender de nuevas tecnologias y nuevos idiomas"+
      " soy Informatico de profesion y por mas de 12 años he trabajado como <strong>desarrollador Java/JEE</strong>"+ 
      " en proyectos Backend. El ultimo tiempo he querido aprender del desarrollo"+
      " Front-end y he descubierto los frameworks <strong>Angular</strong> y <strong>Ionic</strong> los cuales me han encantado.";
      
    
  
  descriptionContext_fr: string = "Je m'appelle <strong>Cristian</strong>, je suis d'origine chilienne, ma nature curieuse m'a fait vivre hors de mon pays depuis 2008,"+
    " je vis actuellement en France -après avoir habité quelques années en Espagne-."+
    " J'aime apprendre de nouvelles technologies et de nouveaux langages."+
     " Je suis informaticien de profession et depuis plus de 12 ans j'ai travaillé en tant que <strong>développeur Java/JEE</strong> dans différents projets Backend."+
     " Ce dernier temps, j'ai voulu m'initier au développement Front-end, j'ai découvert les frameworks <strong>Angular</strong> et <strong>Ionic</strong> que j'ai adorés.";


  descriptionContext_en: string = "My name is <strong>Cristian</strong>. I am Chilean guy, my curious nature has led me live out of my country since 2008."+
     " I'm actually living in France. I like to learn new technologies and new languages (as french and english)."+
      " I am a software programmer by profession and for more than 12 years I've worked as a <strong>Java/JEE developer</strong> in Backend projects. Recently,"+ 
      " I've wanted to learn about Front-end development and I discovered the <strong>Angular</strong> and <strong>Ionic</strong> frameworks which I have loved them.";

  value: string;
  

  param = { value: this.descriptionContext};

  constructor( private translate: TranslateService ) {
    this.value = this.descriptionContext;  
   }

  ngOnInit(): void {

    this.onLangageChange();        
    this.cambioLangageContext();
    
    
    
    
    
  }
  
  onLangageChange(){    
    this.translate.onLangChange.subscribe( (event: LangChangeEvent) => {
      this.cambioLangageContext();
    } );
    
  }

  cambioLangageContext(){    
    let currentLang: string = this.translate.currentLang;    

    if( this.translate.currentLang == undefined )
      currentLang = this.translate.getDefaultLang();

    switch( currentLang ) {
      case 'es' :          
          this.param = { value: this.descriptionContext};
          break;
      case 'fr' :          
          this.param = {value: this.descriptionContext_fr};            
          break;
      case 'en' :          
          this.param = { value: this.descriptionContext_en };
          break;
          
    }    

  }
}
