const Beneficiario = require('../../pessoa/beneficiario');
const Doacao = require('../Doacao');

class DoacaoEnviada extends Doacao {
    idDoacaoEnviada;
    operador;
    beneficiario;

    constructor(idDoacaoEnviada, tipo, quantidade, dataEnvio, operador, beneficiario) {
        super(tipo, quantidade, dataEnvio, operador);
        this.idDoacaoEnviada = idDoacaoEnviada;
        this.beneficiario = beneficiario instanceof Beneficiario.idBeneficiario;
    }

    map() {
        return {
            idDoacaoEnviada: this.idDoacaoEnviada,
            tipo: this.tipo?.map?.() || null,
            quantidade: this.quantidade,
            dataEnvio: this.dataEnvio,
            operador: this.operador?.map?.() || null,
            beneficiario: this.beneficiario?.map?.() || null,
            dataRecebimento: this.dataRecebimento 
                ? moment(this.dataRecebimento).format('DD-MM-YYYY HH:mm:ss') 
                : null
        };
    }
}

module.exports = DoacaoEnviada;
