import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ContactMessage } from './contact-message.model';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private angularFirestore: AngularFirestore, private angularFireAuth: AngularFireAuth ) { }

  signInAnonymously(){
    
      this.angularFireAuth.signInAnonymously()
      .then( ()=>{
        console.log('logged is as Anonymous!!')
      })
      .catch( (error) =>{
        var errorCode= error.code;
        var errorMessage = error.message;
        console.error(`error en signing, code: ${errorCode} message: ${errorMessage}`)
      }) 
      
    
  }

  createContactMessage( contactMessage: ContactMessage ): Promise<any>{
    let createContectMessage = new Promise<any>( ( resolve, reject ) => {
      this.angularFirestore
        .collection("contactMessage")
        .add( Object.assign({}, contactMessage))
        .then( response => {
            console.debug(response);
          },
          error => reject(error) 
        );
    });
    
    return createContectMessage;
      

  }
}
// si no se envia Object.assign( {}, contactMessage) entonces se debe enviar el objeto
// {
//   contactForm:{
//     name:contactMessage.contactForm.name,
//     email: contactMessage.contactForm.email,
//     message:contactMessage.contactForm.message,
//     date: contactMessage.contactForm.date
//   },
//   html: contactMessage.html
// }
