import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<User[]>;

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = new Observable<User[]>();
   }

    ngOnInit() {
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data;
      });
    }

    deletarUsuario(id:Number){
      this.usuarioService.deletarUsuarioList(id).subscribe(data => {
        console.log('retorno do metodo delete' + data);
        this.usuarioService.getUsuarioList().subscribe(data => {
          this.usuarios = data;
        });
      });
    }

  }
