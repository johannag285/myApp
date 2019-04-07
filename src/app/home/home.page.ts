import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import{Todo, TodoService} from './../services/todo.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: Todo[];
 constructor(private storage: Storage,public router: Router,private todoService:TodoService){
 }

 ngOnInit(){
  this.todoService.getTodos().subscribe(res =>{
    this.todos = res;
    console.log(this.todos);
    });
 }

 
}
