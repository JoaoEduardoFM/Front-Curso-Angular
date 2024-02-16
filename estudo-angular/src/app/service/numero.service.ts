import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../app.component";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { User } from "../model/user";
import { Numero } from "../model/numero";

@Injectable({
    providedIn: 'root'
})
export class NumeroService {

    constructor(private http: HttpClient) {

    }

    // busca todos números
    getNumeros() : Observable<any> {
        return this.http.get<any>(AppConstants.usuariosUrl)
    }

    // deleta por id
    deleteNumero(id: Number) : Observable<any> {
        return this.http.delete(AppConstants.deleteNumeroUrl + id, {responseType : 'text'});
    }

    // busca por id usuário
    getId(id: Number) : Observable<any> {
        return this.http.get<any>(AppConstants.buscaNumeroPk + id);
    }

    // cadastra número
    saveNumero(numero: Numero) : Observable<any>{
        return this.http.post<any>(AppConstants.cadastroNumeroUrl, numero);
    }
}
