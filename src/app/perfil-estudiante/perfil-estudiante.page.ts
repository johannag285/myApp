import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { TodoService, Estudiante } from './../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service"



@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {


  myPhoto: any;

  estudiante: Estudiante = {
    imagen: '',
    nombre: '',
    profesion: '',
    ciudad: '',
    descripcion: '',
    hv: ''
  };
  estudianteId = null;

  constructor(private camera: Camera, private todoService: TodoService, private router: ActivatedRoute,
    private nav: NavController, private loadingContoller: LoadingController,public authservice : AuthService) { }


  ngOnInit() {
    this.estudianteId = this.router.snapshot.params['id'];
    if (this.estudianteId) {
      this.loadTodo();
    }
  }
 


  async loadTodo() {
    const loading = await this.loadingContoller.create({
      message: 'Loading ...'
    });
    await loading.present();
    this.todoService.getEstudiante(this.estudianteId).subscribe(res => {
      loading.dismiss();
      this.estudiante = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingContoller.create({
      message: 'Saving ...'
    });
    await loading.present();
    if (this.estudianteId) {
      //actualizar 
      this.todoService.updateEstudiante(this.estudiante, this.estudianteId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/datos-perfil-estudiante');
      });
    } else {
      //adicionar uno nuevo
      this.todoService.addEstudiante(this.estudiante).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/datos-perfil-estudiante');
      });
    }
  }

  remove(item) {
    this.todoService.removeEstudiante(item.id);
  }

  onRemoveEstudiante(idEstudiante: string) {
    this.todoService.removeEstudiante(idEstudiante);
    console.log(idEstudiante);
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetHeight: 300,
      targetWidth: 300
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  OnLogout(){
    this.authservice.logout();
  }

}
