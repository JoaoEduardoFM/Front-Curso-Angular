import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule,  } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisi��es Ajax*/ 
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './componente/usuarioAdd/usuarioAdd.component';
//import { NgxMaskDirective, IConfig } from 'ngx-mask';

//Config mascaras
//export const optionMask: Partial<IConfig> | (() => Partial<IConfig>) = {};

export const appRoutes: Routes = [
  {path : 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},
  {path: 'user', component : UsuarioComponent},
  {path: 'usuarioAdd', component : UsuarioAddComponent},
  {path: 'usuarioAdd', component : UsuarioAddComponent},
  {path: 'usuarioAdd/:id', component : UsuarioAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Importe e configure as rotas principais
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
