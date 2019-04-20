import { Component, OnInit } from '@angular/core';
import{AuthService}from "../servicios/auth.service";
import{Router} from "@angular/router";

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.page.html',
  styleUrls: ['./crear-estudiante.page.scss'],
})
export class CrearEstudiantePage implements OnInit {
  public email:string;
  public password: string;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.auth.register(this.email,this.password).then(auth=>{
     this.router.navigate(['perfil-estudiante'])
      console.log(auth)
    }).catch(err=>console.log(err))
   }

}
