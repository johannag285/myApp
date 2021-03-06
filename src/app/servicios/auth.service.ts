import { Injectable } from '@angular/core';
import{AngularFireAuth} from "@angular/fire/auth"
import { promise } from 'protractor';
import{Router} from "@angular/router"
import { TodoService, Estudiante } from './../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:  AngularFireAuth, private router: Router,private todoService: TodoService) { }
  user_id_empleo:any ;
  user_id_estudiante:any ;
  login(email:string,password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(data=>{
        //aqui traer el user.uid, hacer un campo en la coleccionde estudienates y en la coleccion de empleos 
        //en donde resiva este uid, luego cuando me loguee hago un where en donde me traiga solo
        //los datos que correpsondan a este id
        resolve(data.user.uid);
        this.user_id_empleo = this.todoService.getUserInfoEmpleo(data.user.uid);
        this.user_id_estudiante= this.todoService.getUserInfoEstudiante(data.user.uid);
        
      }).catch(err =>rejected(err))
    });  
  }

  logout(){
    this.AFauth.auth.signOut().then (() =>{
      this.router.navigate(['/login']);
    })
  }

  logoutEmpresa(){
    this.AFauth.auth.signOut().then (() =>{
      this.router.navigate(['/login-empresa']);
    })
  }

  register(email: string, password :string){
    return new Promise((resolve, rejected) =>{
    this.AFauth.auth.createUserWithEmailAndPassword(email,password).then(res=> {
    resolve(res)
      }).catch(err=>rejected(err))
    }); 
  }
}
