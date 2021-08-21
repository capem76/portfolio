import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ContactMessage } from './contact-message.model';
import  Swal  from "sweetalert2";
import { ChangeLangService } from '../change-lang/change-lang.service';
import { IContact } from './icontact.contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(  private angularFirestore: AngularFirestore,
                private changeLangService: ChangeLangService) { }

  
  
 
  createContactMessage( contactMessage: ContactMessage ): Promise<any>{
    let createContectMessage = new Promise<any>( ( resolve, reject ) => {
      this.angularFirestore
        .collection("contactMessage")
        .add( Object.assign({}, contactMessage)) // para que el objeto sea reconocible por firebase
        .then( response => {
            console.debug("Mensaje enviado!");
            Swal.fire({
              title: this.changeLangService.translateString('CONTACT.envioMensajeResponse.title'),
              text: this.changeLangService.translateString('CONTACT.envioMensajeResponse.text'),
              icon: 'success'
            });
            
          },          
          error =>{ reject(error); 
          Swal.fire({
            title: this.changeLangService.translateString('CONTACT.envioMensajeError.title'),
            text: this.changeLangService.translateString('CONTACT.envioMensajeError.text'),
            icon: 'error'
          });
        }
        );
    });
    
    return createContectMessage;
      

  }

  guardarDatosFormSessionStorage( contacForm: IContact ){
    const jsonData = JSON.stringify(contacForm)
    sessionStorage.setItem('contactForm', jsonData);

  }

  getDatosFromSessionStorage(): IContact{
    let contactForm: IContact;
    if( sessionStorage.getItem('contactForm') ){
      return contactForm  = JSON.parse( sessionStorage.getItem('contactForm') ) 
    }else{
      return contactForm = {name: "", message: "", email: ""};
    }

  }
}
