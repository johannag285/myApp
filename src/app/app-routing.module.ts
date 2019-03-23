import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'empleo', loadChildren: './empleo/empleo.module#EmpleoPageModule' },
  { path: 'crear', loadChildren: './crear/crear.module#CrearPageModule' },
  { path: 'perfil-estudiante', loadChildren: './perfil-estudiante/perfil-estudiante.module#PerfilEstudiantePageModule' },
  { path: 'perfil-empresa', loadChildren: './perfil-empresa/perfil-empresa.module#PerfilEmpresaPageModule' },  { path: 'login-empresa', loadChildren: './login-empresa/login-empresa.module#LoginEmpresaPageModule' },
  { path: 'crear-estudiante', loadChildren: './crear-estudiante/crear-estudiante.module#CrearEstudiantePageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
