import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import{NologinGuard} from "./guards/nologin.guard"
import{NologinEmpresaGuard} from "./guards/nologinempresa.guard"
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',canActivate : [NologinGuard] },
  { path: 'empleo', loadChildren: './empleo/empleo.module#EmpleoPageModule' },
  { path: 'crear', loadChildren: './crear/crear.module#CrearPageModule', canActivate : [NologinEmpresaGuard]},
  { path: 'perfil-estudiante', loadChildren: './perfil-estudiante/perfil-estudiante.module#PerfilEstudiantePageModule', canActivate : [AuthGuard]},
  { path: 'perfil-estudiante/:id', loadChildren: './perfil-estudiante/perfil-estudiante.module#PerfilEstudiantePageModule' },
  { path: 'perfil-empresa', loadChildren: './perfil-empresa/perfil-empresa.module#PerfilEmpresaPageModule',canActivate : [AuthGuard] },
  { path: 'perfil-empresa/:id', loadChildren: './perfil-empresa/perfil-empresa.module#PerfilEmpresaPageModule' },
  { path: 'login-empresa', loadChildren: './login-empresa/login-empresa.module#LoginEmpresaPageModule', canActivate : [NologinEmpresaGuard]},
  { path: 'crear-estudiante', loadChildren: './crear-estudiante/crear-estudiante.module#CrearEstudiantePageModule',canActivate : [NologinGuard] },
  { path: 'descripcion', loadChildren: './descripcion/descripcion.module#DescripcionPageModule' },
  { path: 'descripcion2', loadChildren: './descripcion2/descripcion2.module#Descripcion2PageModule' },
  { path: 'datos-perfil-estudiante', loadChildren: './datos-perfil-estudiante/datos-perfil-estudiante.module#DatosPerfilEstudiantePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
