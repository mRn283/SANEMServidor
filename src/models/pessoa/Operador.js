import Pessoa from "./Pessoa.js";

class Operador extends Pessoa {
    constructor(idOperador, nome, telefone, endereco, documento, senha, email, permissao) {
        super(nome, telefone, endereco, documento);
        this.idOperador = idOperador;
        this.senha = senha ?? '';
        this.email = email ?? '';
        this.permissao = permissao ?? 'comum';
    }

    map() {
        return {
            idOperador: this.idOperador,
            nome: this.nome,
            telefone: this.telefone,
            endereco: this.endereco,
            documento: this.documento,
            senha: this.senha,
            email: this.email,
            permissao: this.permissao
        };
    }
}

export default Operador;
