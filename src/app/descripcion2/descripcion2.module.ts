import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Descripcion2Page } from './descripcion2.page';

const routes: Routes = [
  {
    path: '',
    component: Descripcion2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Descripcion2Page]
})
export class Descripcion2PageModule {}
