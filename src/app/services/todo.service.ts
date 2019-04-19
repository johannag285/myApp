import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

export interface Todo {
  id?: string;
  task: string;
  priority: string;
}
export interface Empleo {
  id?: string;
  imagen: string;
  cargo: string;
  descripcion: string;
  salario: string;
  horario: string;
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Todo>;
  private todos: Observable<Todo[]>;

  private empleosCollection: AngularFirestoreCollection<Empleo>;
  private empleos: Observable<Empleo[]>;

  constructor(db: AngularFirestore, private dbFire: AngularFireDatabase, private afStorage: AngularFireStorage) {
    this.todosCollection = db.collection<Todo>('todos');
    this.empleosCollection = db.collection<Empleo>('empleos');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );


    this.empleos = this.empleosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
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

  //métodos para actualizar, cargar y elminar una imagen
  getFiles() {
    let ref = this.dbFire.list('files');

    return ref.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;

    return this.afStorage.ref(`files/${newName}`).putString(information);
  }

  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    }
    return this.dbFire.list('files').push(toSave);
  }


  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;

    let ref = this.dbFire.list('files');

    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}
