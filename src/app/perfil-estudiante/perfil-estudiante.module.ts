import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilEstudiantePage } from './perfil-estudiante.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';



const routes: Routes = [
  {
    path: '',
    component: PerfilEstudiantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
      })      
  ],
  providers:[
    Camera
  ],
  declarations: [PerfilEstudiantePage]
})
export class PerfilEstudiantePageModule {}
