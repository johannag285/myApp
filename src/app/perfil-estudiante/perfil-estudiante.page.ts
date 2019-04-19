import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import{ AngularFireDatabase } from 'angularfire2/database';
import{Todo, TodoService} from './../services/todo.service';
import{ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service"


@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {
  myPhoto: any;
  hoja:any;
  key: string ;
  nombre : any;
  profesion : any;
  ciudad : any;
  detalle:any;
  
  text1: string;
  text2: string;


  registro={
    'nombre':"",
    'profesion':"",
    'ciudad':"",
    'detalle':""
  }
 
  constructor(private camera: Camera, public authservice : AuthService) {}

 
  ngOnInit() {}


 
  takePhoto(){
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

  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetHeight:300,
      targetWidth:300
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
 

   ir(var1,callback) {
    callback(var1);
 }
  setText1(){
    /*this.storage.set('text1',this.registro.nombre);
    this.storage.set('text2',this.registro.profesion);
    this.storage.set('text3',this.registro.ciudad);
    this.storage.set('text4',this.registro.detalle);
    ir();*/
    window.localStorage.setItem('text1',this.registro.nombre);
    window.localStorage.setItem('text2',this.registro.profesion);
    window.localStorage.setItem('text3',this.registro.ciudad);
    window.localStorage.setItem('text4',this.registro.detalle);
    /*window.localStorage.setItem('text1',nombre);
    window.localStorage.setItem('text2',profesion);
    window.localStorage.setItem('text3',ciudad);*/
    
    //this.storage.set('myData',this.text1);
  }

  getText1(){
    
    /*this.setText(function(){
      window.location.href = "";
    });*/
    this.registro.nombre = window.localStorage.getItem('text1');
    this.registro.profesion = window.localStorage.getItem('text2');
    this.registro.ciudad = window.localStorage.getItem('text3');
    this.registro.detalle = window.localStorage.getItem('text4');
    //console.log('datos',this.nombre1,this.profesion1,this.ciudad1);
    /*this.storage.get('myData').then((val) => {
      console.log('Datos', val);
      });*/
  }

  OnLogout(){
    this.authservice.logout();
  }

}
