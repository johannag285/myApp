import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatosPerfilEstudiantePage } from './datos-perfil-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPerfilEstudiantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosPerfilEstudiantePage]
})
export class DatosPerfilEstudiantePageModule {}
