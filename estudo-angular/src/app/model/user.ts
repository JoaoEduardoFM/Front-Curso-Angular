export class User {
    id!: number;
    login: string;
    nome: string;
    cpf: string;

    constructor() {
        this.login = ''; // Inicializado com uma string vazia
        this.nome = '';
        this.cpf = '';
    }
}
