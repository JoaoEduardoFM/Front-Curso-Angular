import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../app.component";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginServiceService {

    title = 'Curso Angular';

    constructor(private http: HttpClient, private router: Router) {}

    public login(usuario: Usuario): boolean {
        if (usuario.username === 'adm' && usuario.password === 'adm') {
            this.router.navigate(['/home']);
            return true;
        } else {
            console.log('Credenciais inválidas');
            return false;
        }
    }
}
