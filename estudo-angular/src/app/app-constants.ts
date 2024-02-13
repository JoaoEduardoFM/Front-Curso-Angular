export class AppConstants{

    public static get baseServidor(): String { return "http://localhost:8080/"}

    public static get baseLogin(): string {return this.baseServidor + "contexto projeto/login"}

    public static get baseUrl(): string {return this.baseServidor + "contexto url"}

    public static get usuariosUrl(): string {return this.baseServidor + "usuario/buscaUsuarios"}

    public static get deleteusuariosUrl(): string {return this.baseServidor + "deleteusuario/"}

}