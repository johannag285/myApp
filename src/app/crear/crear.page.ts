import { Component, OnInit } from '@angular/core';
import{AuthService}from "../servicios/auth.service";
import{Router} from "@angular/router";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  public email:string;
  public password: string;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
   this.auth.register(this.email,this.password).then(auth=>{
    this.router.navigate(['perfil-empresa'])
     console.log(auth)
   }).catch(err=>console.log(err))
  }

}
