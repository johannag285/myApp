import { Component, OnInit } from '@angular/core';
import { Empleo, TodoService } from './../services/todo.service';
@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {
  showCreate =false;
  empleos: Empleo[];
  esEstudiante = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //leo la variable del storage
    this.esEstudiante = localStorage.getItem('estudiante');
    let variable;
     if(variable == true){
       this.showCreate = true;
     }

    this.todoService.getEmpleos().subscribe(res => {
      this.empleos = res;
      console.log(this.empleos);
    });
  }

}
