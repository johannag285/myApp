import { Component, OnInit } from '@angular/core';
import { Empleo, TodoService } from './../services/todo.service';
@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {
  empleos: Empleo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getEmpleos().subscribe(res => {
      this.empleos = res;
      console.log(this.empleos);
    });
  }

}
