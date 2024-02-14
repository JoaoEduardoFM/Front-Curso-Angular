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

  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null){
      console.log('valor sendo editado:' + id)

    }
  }
}
