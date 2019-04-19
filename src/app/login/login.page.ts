import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import{AuthService} from "../servicios/auth.service"
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  email:string;
  password:string;
  constructor(private authService:AuthService, public router: Router) {}

  ngOnInit() {
  }

  onSubmitLogin(){
   this.authService.login(this.email,this.password).then(res=>{
     this.router.navigate(['/perfil-estudiante']);
   }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
  }
 
}

