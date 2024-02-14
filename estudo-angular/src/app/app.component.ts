import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './service/login-service-service';
import { Router } from '@angular/router';

export interface Usuario {
  username: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  public sair(){
    localStorage.clear();
    this.router.navigate(['login']);

  }

  public esconderMenu(): boolean {
    // Verifica se a rota atual é '/login'
    if(this.router.url === '/login'){
      return true;
    }else{
      return false;
    }
}

}