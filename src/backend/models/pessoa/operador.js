const Pessoa = require('./Pessoa');

class Operador extends Pessoa {

  IdOperador;
  senha;
  email;
  permissao;

  constructor(IdOperador, nome, telefone, endereco, documento, senha,email,permissao) {
    super(nome, telefone, endereco, documento);
    this.IdOperador = IdOperador;
    this.senha = senha;
    this.email = email;
    this.permissao = permissao;
  }

  map() {
    return {
      IdOperador: this.IdOperador,
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

module.exports = Operador;
