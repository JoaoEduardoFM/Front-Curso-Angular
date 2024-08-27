import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { Numero } from 'src/app/model/numero';
import { NumeroService } from 'src/app/service/numero.service';

@Component({
  selector: 'app-usuarioAdd',
  templateUrl: './usuarioAdd.component.html',
  styleUrls: ['./usuarioAdd.component.css']
})
export class UsuarioAddComponent implements OnInit {

  telefones: Numero[] = [];
  numeroTelefone = new Numero();
  usuario = new User();
  successMessage: string = ''; // Mensagem de sucesso
  alertMessage: string = ''; // Mensagem de sucesso
  successTimeout: any; // Referência para o timeout
  alertTimeout: any; // Referência para o timeout

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService, private numeroService: NumeroService) {}

  ngOnInit() {
    let idString = this.routeActive.snapshot.paramMap.get('id');
    let id: number;

    if (idString !== null) {
      id = parseInt(idString, 10);

      if (!isNaN(id)) {
        this.usuarioService.getId(id).subscribe(data => {
          this.usuario = data;
          console.log('usuários:' + data);
        });

        // Carrega os números após carregar o usuário
        this.carregarNumeros(id);
      } else {
        console.error('ID não é um número válido.');
      }
    }
  }

  salvarUser() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.usuarioService.saveUsuario(this.usuario).subscribe(data => {
        this.successMessage = 'Usuário atualizado com sucesso!';
        this.setSuccessTimeout();
      });
    } else {
      this.usuarioService.saveUsuario(this.usuario).subscribe(data => {
        this.setSuccessTimeout();
        this.successMessage = 'Usuário salvo com sucesso!';
        this.novo();
      });
    }
  }

  deleteNumero(id: Number){
    if (id !== null && confirm("Deseja remover?")) {
    this.numeroService.deleteNumero(id).subscribe(
      () => {
        this.ngOnInit();
      },
      error => {
        console.log(`Erro ao excluir usuário com ID ${id}:`, error);
      }
    )
  }
}

  carregarNumeros(id: Number) {
    this.numeroService.getId(id).subscribe(
      (data: Numero[]) => {
        this.telefones = data;
        console.log(data);
      },
      error => {
        console.log('Ocorreu um erro ao buscar os usuários:', error);
      }
    );
  }

  novo() {
    this.usuario = new User;
    this.numeroTelefone = new Numero();
  }

  addNumero(){
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.numeroTelefone.usuarioPk = this.usuario.id;
      this.numeroService.saveNumero(this.numeroTelefone).subscribe(data => {
        this.successMessage = 'Número inserido com sucesso!';
        this.ngOnInit();
        this.setSuccessTimeout();
      });
    } else {
        this.novo();
        this.alertMessage = 'Cadastre um usuário!';
        this.setAlertTimeout();
    }
  }

  clearAlertMessage() {
    this.alertMessage = '';
 
  }

  setAlertTimeout() {
    this. alertTimeout= setTimeout(() => {
      this.clearAlertMessage();
    }, 3000); // 3000 milissegundos = 3 segundos
  }
  
  setSuccessTimeout() {
    this.successTimeout = setTimeout(() => {
      this.clearSuccessMessage();
    }, 3000); // 3000 milissegundos = 3 segundos
  }

  clearSuccessMessage() {
    this.successMessage = '';
    clearTimeout(this.successTimeout);
  }
}



