class Pessoa {
    constructor(nome, telefone, endereco, documento) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.documento = documento;
    }

    map() {
        return {
            nome: this.nome,
            telefone: this.telefone,
            endereco: this.endereco,
            documento: this.documento
        };
    }
}

export default Pessoa;
