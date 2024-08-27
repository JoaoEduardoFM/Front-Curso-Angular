import { Component } from '@angular/core';
import { LoginServiceService } from '../service/login-service-service';

export interface Usuario {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Usuario: Usuario = { username: '', password: '' };

  constructor(private loginservice: LoginServiceService) { }

  public login() {
    this.loginservice.login(this.Usuario);
  }
}
