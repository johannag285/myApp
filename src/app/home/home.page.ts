import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 constructor(private storage: Storage,public router: Router){
 }

 login(){
   this.storage.set('name', 'Max');
   this.storage.get('age').then((val) => {
    console.log('Your age is', val);
    });
    
  this.router.navigate(['../login']);
 }
}
