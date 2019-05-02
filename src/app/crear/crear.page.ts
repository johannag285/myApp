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
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          Validators.minLength(8),
          Validators.maxLength(45)
        ])),
      password: new FormControl( '',Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
    });
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
