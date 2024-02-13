import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../app.component";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) {

    }

    getUsuarioList() : Observable<any> {
        return this.http.get<any>(AppConstants.usuariosUrl)
    }

    deletarUsuarioList(id: Number) : Observable<any> {
        return this.http.delete(AppConstants.deleteusuariosUrl + id, {responseType : 'text'});
    }
}
