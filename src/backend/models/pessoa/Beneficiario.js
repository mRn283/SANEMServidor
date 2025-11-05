const Pessoa = require('./Pessoa');

class Beneficiario extends Pessoa {
  idBeneficiario;
  aprovado;

  constructor(idBeneficiario, nome, telefone, endereco, documento, aprovado,email) {
    super(nome, telefone , endereco, documento);
    this.idBeneficiario = idBeneficiario;
    this.aprovado = aprovado;
  }

  map() {
    return {
      idBeneficiario: this.idBeneficiario,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      documento: this.documento,
      aprovado: this.aprovado,
      email: this.email
    };
  }

}

module.exports = Beneficiario;
