import { Component, OnInit } from '@angular/core';
import{AuthService}from "../servicios/auth.service";
import{Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  myForm: FormGroup;
  public email:string;
  public password: string;

  constructor(private auth:AuthService,private router:Router,
    private  fb: FormBuilder) {
      this.myForm = this.fb.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          CrearPage.isValidEmail
        ])),
      password: new FormControl( '',Validators.compose([
        Validators.required,
        CrearPage.isValidPassword
        
        ])),
    });
  }
  static isValidEmail(control: FormControl){
 
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(control.value);
      
      if (!result) {
        return {
          'email:validation:fail' : true
        }
      }
      
      return null;
  }
  static isValidPassword(control: FormControl){
 
    let re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      let result = re.test(control.value);
      
      if (!result) {
        return {
          'Password:validation:fail' : true
        }
      }
      return null;
  }


  ngOnInit() {}
  OnSubmitRegister(){
   this.auth.register(this.email,this.password).then(auth=>{
    this.router.navigate(['perfil-empresa'])
     console.log(auth)
   }).catch(err=>console.log(err))
  }

  saveData(){
   // console.log(this.myForm.value)
  //alert(JSON.stringify(this.myForm))
  }
}
