import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import{AuthService} from "../servicios/auth.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.page.html',
  styleUrls: ['./login-empresa.page.scss'],
})
export class LoginEmpresaPage implements OnInit {
  loginForm: FormGroup;
  
  email:string;
  password:string;
  constructor(private authService:AuthService, public router: Router) { }

  ngOnInit() {
  }
  onSubmitLoginEmpresa(){
    this.authService.login(this.email,this.password).then(res=>{
      this.router.navigate(['/perfil-empresa']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
   }

}
