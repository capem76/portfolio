import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.scss']
})
export class ChangeLangComponent implements OnInit {

  langage: string = 'es';

  constructor( private translate: TranslateService ) { }

  ngOnInit(): void {
    
    this.iniciaLang();

  }

  /**
   * Metodo para cambiar el lenguage en ngx-translate
   * @param lang en | es | fr
   * 
   */
  changeLangue( lang: string){
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang);
    this.langage = lang;

  }

  iniciaLang(){
    if( !sessionStorage.getItem('lang') ){
      sessionStorage.setItem('lang', 'es');      
    }else{
      this.translate.use( sessionStorage.getItem('lang') );
      this.langage = sessionStorage.getItem('lang');
    }

  }



}
