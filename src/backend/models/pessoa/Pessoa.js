class Pessoa {
  
  nome;
  telefone;
  endereco;
  documento;

  constructor( nome, telefone, endereco, documento) {
    this.nome = nome;
    this.telefone = telefone ?? "000";
    this.endereco = endereco ?? "000";
    this.documento = documento;
  }
}

module.exports = Pessoa;
