import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import{Empleo, TodoService} from './../services/todo.service';
import{ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.page.html',
  styleUrls: ['./perfil-empresa.page.scss'],
})
export class PerfilEmpresaPage implements OnInit {

  myPhoto: any;

  empleo: Empleo ={
    cargo:'',
    descripcion: '',
    imagen: '',
    salario: '',
    horario:''
  };
  empleoId =null;

  constructor(private camera: Camera, private todoService:TodoService,private router:ActivatedRoute,private nav:NavController,private loadingContoller:LoadingController) { }

  ngOnInit() {
    this.empleoId = this.router.snapshot.params['id'];
    if(this.empleoId){
        this.loadTodo();
    }
  }


  async loadTodo(){
    const loading = await this.loadingContoller.create({
      message:'Loading ...'
    });
    await loading.present(); 
    this.todoService.getEmpleo(this.empleoId).subscribe(res=>{
      loading.dismiss();
      this.empleo = res;
    });
   }
   async saveTodo(){
     const loading = await this.loadingContoller.create({
       message:'Saving ...'
     });
     await loading.present(); 
     if(this.empleoId){
       //actualizar 
       this.todoService.updateEmpleo(this.empleo,this.empleoId).then(()=>{
         loading.dismiss();
         this.nav.navigateForward('/empleo');
       });
     }else{
       //adicionar uno nuevo
       this.todoService.addEmpleo(this.empleo).then(()=>{
         loading.dismiss();
         this.nav.navigateForward('/empleo');
       });
     }
    }
   remove(item){
     this.todoService.removeEmpleo(item.id);
   }

   onRemoveEmpleo(idEmpleo:String){
    this.todoService.removeEmpleo(idEmpleo);
    console.log(idEmpleo);
   }

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
}
