import { Component } from '@angular/core';
import { LoginServiceService } from '../service/login-service-service';

export interface Usuario {
  username: String;
  password: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  title = 'estudo-angular';

  Usuario ={username: '', password: ''}

  constructor(private loginservice: LoginServiceService){}

  public login(){
    this.loginservice.login(this.Usuario)
  }
}