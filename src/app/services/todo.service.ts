import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { defineBase } from '@angular/core/src/render3';
import { request } from 'https';

export interface Empleo {
  id?: string;
  nombre: string;
  imagen: string;
  cargo: string;
  descripcion: string;
  salario: string;
  horario: string;
  id_user: string;
}

export interface Estudiante {
  id?: string;
  imagen: string;
  nombre: string;
  profesion: string;
  ciudad: string;
  descripcion: string;
  hv: string;
  id_user: string;
}



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private empleo : Empleo;
  private estudiante: Estudiante;

  private empleosCollection: AngularFirestoreCollection<Empleo>;
  private empleos: Observable<Empleo[]>;

  private estudiantesCollection: AngularFirestoreCollection<Estudiante>;
  private estudiantes: Observable<Estudiante[]>;


  constructor(public db: AngularFirestore, private dbFire: AngularFireDatabase,
    private afStorage: AngularFireStorage) {

    this.empleosCollection = db.collection<Empleo>('empleos');
    this.estudiantesCollection = db.collection<Estudiante>('estudiantes');



    this.empleos = this.empleosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );



    this.estudiantes = this.estudiantesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }


  
  getUserInfoEmpleo(request) {
    //const ref = this.db.collection("");
    let id = request.empleo.id_user;
    let ofertas = this.db.collection('empleos', ref => ref.where('id_user', '==', id)).valueChanges();
  }

  getUserInfoEstudiante(request) {
    //const ref = this.db.collection("");
    let id = request.estudiante.id_user;
    let ofertas = this.db.collection('estudiantes', ref => ref.where('id_user', '==', id)).valueChanges();
  }

  //métodos para el crud de empleo
  getEmpleos() {
    return this.empleos;
  }

  getEmpleo(id: string) {
    return this.empleosCollection.doc<Empleo>(id).valueChanges();
  }

  updateEmpleo(empleo: Empleo, id: string) {
    return this.empleosCollection.doc(id).update(empleo);
  }

  addEmpleo(empleo: Empleo) {
    return this.empleosCollection.add(empleo);
  }

  removeEmpleo(id: string) {
    return this.empleosCollection.doc(id).delete();
  }

  //métodos para el crud de estudiante
  getEstudiantes() {
    return this.estudiantes;
  }

  getEstudiante(id: string) {
    return this.estudiantesCollection.doc<Estudiante>(id).valueChanges();
  }

  updateEstudiante(estudiante: Estudiante, id: string) {
    return this.estudiantesCollection.doc(id).update(estudiante);
  }

  addEstudiante(estudiante: Estudiante) {
    return this.estudiantesCollection.add(estudiante);
  }

  removeEstudiante(id: string) {
    return this.estudiantesCollection.doc(id).delete();
  }

  //métodos para actualizar, cargar y elminar un archivo
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
