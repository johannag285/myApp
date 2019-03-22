import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';


import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage, 
    children: [
      {
        path: 'login',
        redirectTo: './login/login.module#LoginPageModule'
      
      }
    ]
  }
] 
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
  declarations: [HomePage]
})
export class HomePageModule {}
