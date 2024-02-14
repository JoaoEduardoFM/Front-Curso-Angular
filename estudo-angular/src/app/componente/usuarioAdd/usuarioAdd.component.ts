import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-usuarioAdd',
  templateUrl: './usuarioAdd.component.html',
  styleUrls: ['./usuarioAdd.component.css']
  
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();
  successMessage: string = ''; // Mensagem de sucesso
  successTimeout: any; // Referência para o timeout

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService) {}

  ngOnInit() {
    let idString = this.routeActive.snapshot.paramMap.get('id');
    let id: number;

    if (idString !== null) {
      id = parseInt(idString, 10);

      if (!isNaN(id)) {
        this.usuarioService.getId(id).subscribe(data => {
          this.usuario = data;
        });
      } else {
        console.error('ID não é um número válido.');
      }
    }
  }

  salvarUser(){
    if(this.usuario.id != null && this.usuario.id.toString().trim() != null){
      this.usuarioService.saveUsuario(this.usuario).subscribe (data =>{
      this.successMessage = 'Usuário atualizado com sucesso!';
      this.setSuccessTimeout();
      })
    }else{
      this.usuarioService.saveUsuario(this.usuario).subscribe (data =>{
        this.successMessage = 'Usuário cadastrado com sucesso!';
        this.setSuccessTimeout();
        this.novo();
      });
    }
  }

  

  novo(){
    this.usuario = new User;
  }

  setSuccessTimeout() {
    this.successTimeout = setTimeout(() => {
      this.clearSuccessMessage();
    }, 2000); // 3000 milissegundos = 2 segundos
  }

  clearSuccessMessage() {
    this.successMessage = '';
    clearTimeout(this.successTimeout); // Limpa o timeout
  }
}
