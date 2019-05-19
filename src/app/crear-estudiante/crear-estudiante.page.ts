import { Component, OnInit } from '@angular/core';
import{AuthService}from "../servicios/auth.service";
import{Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.page.html',
  styleUrls: ['./crear-estudiante.page.scss'],
})
export class CrearEstudiantePage implements OnInit {
  myForm: FormGroup;
  public email:string;
  public password: string;
  
  constructor(private auth:AuthService,private router:Router,
    private  fb: FormBuilder) {
      this.myForm = this.fb.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          this.isValidEmail
        ])),
      password: new FormControl( '',Validators.compose([
        Validators.required,
        this.isValidPassword
        ])),
    });
   }
   async isValidEmail(control: FormControl){
 
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(control.value);
      
      if (!result) {
        return {
          'email:validation:fail' : true
        }
      }
      
      return null;
  }
  async isValidPassword(control: FormControl){
 
    let re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      let result = re.test(control.value);
      
      if (!result) {
        return {
          'Password:validation:fail' : true
        }
      }
      return null;
  }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.auth.register(this.email,this.password).then(auth=>{
     this.router.navigate(['perfil-estudiante'])
      console.log(auth)
    }).catch(err=>console.log(err))
   }
   saveData(){
    // console.log(this.myForm.value)
   //alert(JSON.stringify(this.myForm))
   }

}
