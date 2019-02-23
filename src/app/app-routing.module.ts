import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'empleo', loadChildren: './empleo/empleo.module#EmpleoPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
