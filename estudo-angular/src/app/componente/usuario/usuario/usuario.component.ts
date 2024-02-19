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

  users: User[] = [];
  nome : String;
  login : String;
  id : Number;
  cpf : String;
  p: number = 1; // Inicialize a propriedade "p" com um valor numérico

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarioList().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log('Ocorreu um erro ao buscar os usuários:', error);
      }
    );
  }

  deletarUsuario(id: Number) {
    this.usuarioService.deletarUsuarioList(id).subscribe(
      () => {
        console.log(`Usuário com ID ${id} excluído com sucesso.`);
        // Recarregar a lista após a exclusão
        this.carregarUsuarios();
      },
      error => {
        console.log(`Erro ao excluir usuário com ID ${id}:`, error);
      }
    );
  }

  consutarNome(){
    this.usuarioService.getNome(this.nome).subscribe(data =>{
      this.users =data;
    })
  }

  consutarLogin(){
    this.usuarioService.getLogin(this.login).subscribe(data =>{
      this.users =data;
    })
  }

  consutarId(){
    this.usuarioService.getId(this.id).subscribe(data =>{
      this.users =data;
    })
  }

  consutarCpf(){
    this.usuarioService.getCpf(this.cpf).subscribe(data =>{
      this.users =data;
    })
  }

  aplicarFiltros() {
  if(this.nome != null){
    this.consutarNome();
  }
  }
}
