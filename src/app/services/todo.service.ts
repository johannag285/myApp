import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import{Observable} from 'rxjs';
import{map} from 'rxjs/operators';

export interface Todo{
  id ?: string;
  task: string;
  priority : string;
}
export interface Empleo{
  id ?: string;
  imagen: string;
  cargo : string;
  descripcion : string;
  salario : string;
  horario : string;
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private todosCollection: AngularFirestoreCollection<Todo>;
 private todos: Observable<Todo[]>;

 private empleosCollection: AngularFirestoreCollection<Empleo>;
 private empleos: Observable<Empleo[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('todos');
    this.empleosCollection = db.collection<Empleo>('empleos');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );


    this.empleos = this.empleosCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
   }

  

  getTodos() {
    return this.todos;
  }
 
  getTodo(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }
 
  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }
 
  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }
 
  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }

//métodos para el crud de empleo
  getEmpleos() {
    return this.empleos;
  }
 
  getEmpleo(id) {
    return this.empleosCollection.doc<Empleo>(id).valueChanges();
  }
 
  updateEmpleo(empleo: Empleo, id: string) {
    return this.empleosCollection.doc(id).update(empleo);
  }
 
  addEmpleo(empleo: Empleo) {
    return this.empleosCollection.add(empleo);
  }
 
  removeEmpleo(id) {
    return this.empleosCollection.doc(id).delete();
  }
}
