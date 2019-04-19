import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import{ TodoService} from './../services/todo.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
 constructor(private storage: Storage,public router: Router,private todoService:TodoService){
 }

 ngOnInit(){
 }

 
}
