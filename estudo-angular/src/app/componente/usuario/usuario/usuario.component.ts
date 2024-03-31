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
  p: number = 1;
  total: number;
  itemsToPaginate: any[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  pagina: number = 1;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
   this.carregarPagina(this.pagina);
  }


  deletarUsuario(id: Number, index: number) {
    this.usuarioService.deletarUsuarioList(id).subscribe(data =>{
        console.log(`Usuário com ID ${id} excluído com sucesso.`);
        //this.users.splice(index, 1)
        this.carregarPagina(this.pagina);
      },
      error => {
        console.log(`Erro ao excluir usuário com ID ${id}:`, error);
      }
    );
  }

  consutarNome(){
    this.usuarioService.getNomePage(this.nome, this.pagina).subscribe(data =>{
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

  carregarPagina(pageNumber: number) {
    this.usuarioService.getUsuarioListPage(pageNumber - 1).subscribe(data => {
      this.pagina = pageNumber;
      this.users = data.content;
      this.total = data.totalElements;
    },
    error => {
      console.log('Ocorreu um erro ao buscar os usuários:', error);
    }
  );
  }
}
