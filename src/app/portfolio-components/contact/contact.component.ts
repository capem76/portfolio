import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from "@angular/forms";
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
                private http: HttpClient, 
                private afireDb: AngularFireDatabase,
                private firestore: AngularFirestore,
                private contactService: ContactService,
                private angularFireAuth: AngularFireAuth ) {
    this.inicializaComponentesFormulario();
   }
  
  ngAfterViewInit(): void {
    this.suscriptionValueChanges();
  }

  ngOnInit(): void {
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

  ngOnDestroy(): void {
   this.subsMessage.unsubscribe();
  }

  private inicializaComponentesFormulario(): void {
    this.nameForm = new FormControl("", [
       Validators.required,
       Validators.maxLength(50),
       Validators.minLength(5)] 
    );
    this.emailForm =  new FormControl("", [
      Validators.required, 
      Validators.email, 
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.maxLength(320)
    ]);
    this.messageForm = new FormControl("", [
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

  public verificaErrorFormulario( errors: ValidationErrors ): boolean {
    console.log(errors);
    if(this.form.valid &&  this.honeypot.pristine ){
      return true
    }else {

      return false;
    }
    
  }

  public enviarFormulario(){ 
    
    let contactValue: IContact = {
      name: this.nameForm.value,
      email: this.emailForm.value,
      message: this.messageForm.value,
      date: new Date()
    }    
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

  

}
