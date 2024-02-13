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

    public login(Usuario: Usuario): boolean {
        // Verifique se o nome de usuário e a senha correspondem aos do administrador
        if (Usuario.username === 'adm' && Usuario.password === 'adm') {
            // Se corresponderem, o login é válido
            console.log('Login bem-sucedido como administrador');
            this.router.navigate(['/home']); // Redireciona para a rota 'home'
            return true;
        } else {
            // Se não corresponderem, o login é inválido
            console.log('Credenciais inválidas');
            return false;
        }
    }
}
