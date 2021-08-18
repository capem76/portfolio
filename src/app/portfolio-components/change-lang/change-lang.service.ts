import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class ChangeLangService {

  constructor( private translateService: TranslateService ) { }

  public translateString(keyText: string ): string {
    let keyValor: string = "";
    this.translateService.get( keyText ).subscribe( ( res: string)=> {
      console.debug(res);
      keyValor = res;
    });

    return keyValor;
  }
}
