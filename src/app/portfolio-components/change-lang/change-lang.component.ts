import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.scss']
})
export class ChangeLangComponent implements OnInit {

  constructor( private translate: TranslateService ) { }

  ngOnInit(): void {
  }

  /**
   * Metodo para cambiar el lenguage en ngx-translate
   * @param lang En | Es | Fr
   * 
   */
  changeLangue( lang: string){
    this.translate.use(lang);

  }

}
