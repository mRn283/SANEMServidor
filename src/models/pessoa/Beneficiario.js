import Pessoa from "./Pessoa.js";

class Beneficiario extends Pessoa {
    constructor(idBeneficiario, nome, telefone, endereco, documento, aprovado, email) {
        super(nome, telefone, endereco, documento);
        this.idBeneficiario = idBeneficiario;
        this.aprovado = aprovado ?? false;
        this.email = email ?? '';
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

export default Beneficiario;
