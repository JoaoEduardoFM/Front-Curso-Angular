export class AppConstants{

    //Endpoints usuário

    public static get baseServidor(): String { return "http://localhost:8080/"}

    public static get baseLogin(): string {return this.baseServidor + "contexto projeto/login"}

    public static get baseUrl(): string {return this.baseServidor + "usuario/"}

    public static get usuariosUrl(): string {return this.baseUrl + "/buscaUsuarios"}

    public static get deleteusuariosUrl(): string {return this.baseUrl + "deletaUsuario/"}

    public static get cadastroUsuarioUrl(): string {return this.baseUrl + "cadastraUsuario/"}

    //Endpoints número
    public static get baseUrlNumero(): string {return this.baseServidor + "numero/"}

    public static get buscaNumeroPk(): string {return this.baseUrlNumero + "buscaPorUsuarioPk/"}

    public static get deleteNumeroUrl(): string {return this.baseUrlNumero + "deletaNumero/"}

    public static get cadastroNumeroUrl(): string {return this.baseUrlNumero + "cadastraNumero/"}


}