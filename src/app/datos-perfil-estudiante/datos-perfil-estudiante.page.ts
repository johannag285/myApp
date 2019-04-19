import { Component, OnInit } from '@angular/core';
import{Estudiante, TodoService} from './../services/todo.service';
@Component({
  selector: 'app-datos-perfil-estudiante',
  templateUrl: './datos-perfil-estudiante.page.html',
  styleUrls: ['./datos-perfil-estudiante.page.scss'],
})
export class DatosPerfilEstudiantePage implements OnInit {

  estudiantes: Estudiante[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getEstudiantes().subscribe(res => {
      this.estudiantes = res;
      console.log(this.estudiantes);
    });
  }

}
