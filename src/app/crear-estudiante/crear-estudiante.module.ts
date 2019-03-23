import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearEstudiantePage } from './crear-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEstudiantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearEstudiantePage]
})
export class CrearEstudiantePageModule {}
