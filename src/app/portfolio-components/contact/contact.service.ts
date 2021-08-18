import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ContactMessage } from './contact-message.model';
import { AngularFireAuth } from "@angular/fire/auth";
import  Swal  from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private angularFirestore: AngularFirestore, private angularFireAuth: AngularFireAuth ) { }

 
  createContactMessage( contactMessage: ContactMessage ): Promise<any>{
    let createContectMessage = new Promise<any>( ( resolve, reject ) => {
      this.angularFirestore
        .collection("contactMessage")
        .add( Object.assign({}, contactMessage)) // para que el objeto sea reconocible por firebase
        .then( response => {
            console.debug("Mensaje enviado!");
            Swal.fire({
              title: 'Mensaje enviado',
              text: 'Su mensaje ha sido enviado con exito',
              icon: 'success'
            });
            
          },          
          error =>{ reject(error); 
          Swal.fire({
            title: 'Error en envio',
            text: 'Su mensaje no ha sido',
            icon: 'error'
          });
        }
        );
    });
    
    return createContectMessage;
      

  }
}
