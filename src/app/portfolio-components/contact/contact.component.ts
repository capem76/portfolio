import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors, Form } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';
import { IContact } from './icontact.contact';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { ContactService } from './contact.service';
import { ContactMessage } from './contact-message.model';
import { AngularFireAuth } from "@angular/fire/auth";




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {

  isValidForm: boolean = false;
  form: FormGroup;
  nameForm: FormControl; 
  emailForm: FormControl; 
  messageForm: FormControl; 
  honeypot: FormControl; 
  isSubmitted: boolean = false; // show and hide success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  

  textMessage: string = "";
  textName: string = "";
  private subsMessage: Subscription;
  private subsName: Subscription;
  

  constructor(  private formbuilder: FormBuilder,              
                private contactService: ContactService,
                private angularFireAuth: AngularFireAuth ) {
    
   }
  
  ngAfterViewInit(): void {
    this.suscriptionValueChanges();
  }

  ngOnInit(): void {
    this.inicializaComponentesFormulario();
    
  }


  onSubmit(){
    console.log("aqui envio formulario!!!");
    console.log(this.form);
    this.isSubmitted = true;
    
  }


  private suscriptionValueChanges(): void{   
    this.subsMessage = this.messageForm.valueChanges
     .subscribe( ( text: string) => {
      this.textMessage = text;

      });
  }

  
  private inicializaComponentesFormulario(): void {

    let contactFormData: IContact = this.contactService.getDatosFromSessionStorage();
    
    this.nameForm = new FormControl(contactFormData.name, [
       Validators.required,
       Validators.maxLength(50),
       Validators.minLength(5)] 
    );
    this.emailForm =  new FormControl(contactFormData.email, [
      Validators.required, 
      Validators.email, 
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.maxLength(320)
    ]);
    this.messageForm = new FormControl(contactFormData.message, [
      Validators.required, 
      Validators.maxLength(256)
    ]);
    this.honeypot = new FormControl(""); // for preventing spam

    this.form = this.formbuilder.group({
      name: this.nameForm,
      email: this.emailForm,
      message: this.messageForm,
      honeypot: this.honeypot
    });
       

  }

  public isFormularioValido(): boolean {    
    if(this.form.valid &&  this.honeypot.pristine ){
      return true
    }else {
      return false;
    }
  }

  public isFormControlValid( formControl: FormControl ): boolean{    
    if  (formControl?.valid && (formControl.dirty || formControl.touched) ){
      console.log("valido y sucio o tocado");
      return true;
    }else if (formControl?.invalid && (formControl.dirty || formControl.touched) ){
      console.log("invalido y sucio o tocado");
      return false;
    }
      

  }

  public enviarFormulario(){ 
    
    let contactValue = this.creaContactFormObj(this.form);

    const html = `
    <div>From:${contactValue.name}</div>
    <div>Email: <a href="mailto:${contactValue.email}">${contactValue.email}</a></div>
    <div>Date:${contactValue.date}</div>
    <div>Message:</div>
    `;
    let formRequest =  new ContactMessage();

    
    // this.afireDb.database.ref('/messages').set( formRequest );
    this.angularFireAuth.signInAnonymously()
    .then( ()=>{
      console.log('logged is as Anonymous!!');
      formRequest.contactForm = contactValue;
      formRequest.html = html;
      this.contactService.createContactMessage( formRequest );
    })
    .catch( (error) =>{
      var errorCode= error.code;
      var errorMessage = error.message;
      console.error(`error en signing, code: ${errorCode} message: ${errorMessage}`)
    }) 
    
    this.form.reset();

  }

  public cleanUnnecessaryWhitSpaces(cadena: String){
    console.log(`cadena a limpiar: ${cadena}`);
    let cadenaLimpia: string = cadena.replace(/\s{2,}/g, ' ').trim();
    console.log(`cadena limpia: ${cadenaLimpia}`);
    
    return cadenaLimpia;

  }

  ngOnDestroy(): void {    
    this.subsMessage.unsubscribe();

    // if( this.isFormularioValido() ){
      this.contactService.guardarDatosFormSessionStorage( this.creaContactFormObj(this.form) );      
    // }
   }

   creaContactFormObj( contactForm: FormGroup ):IContact {    
     
      let contactValue: IContact = {
        name: contactForm.get('name').value === null? "" : contactForm.get('name').value,
        email: contactForm.get('email').value === null? "": contactForm.get('email').value ,
        message: contactForm.get('message').value === null ? "" : contactForm.get('message').value,
        date: new Date(),
        formPristine: contactForm.pristine,
        formTouched: contactForm.touched,
        formStatus: contactForm.status

      }    
      return contactValue;

   }

  

}
