import { Component, OnInit } from '@angular/core';
import { Empleo, TodoService } from './../services/todo.service';
@Component({
  selector: 'app-ver-empleos',
  templateUrl: './ver-empleos.page.html',
  styleUrls: ['./ver-empleos.page.scss'],
})
export class VerEmpleosPage implements OnInit {
  empleos: Empleo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getEmpleos().subscribe(res => {
      this.empleos = res;
      console.log(this.empleos);
    });
  }

}
