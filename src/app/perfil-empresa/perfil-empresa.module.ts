import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpresaPage } from './perfil-empresa.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


const routes: Routes = [
  {
    path: '',
    component: PerfilEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    Camera
  ],
  declarations: [PerfilEmpresaPage]
})
export class PerfilEmpresaPageModule {}
