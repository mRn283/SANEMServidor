const Beneficiario = require('../../pessoa/beneficiario');
const Doacao = require('../Doacao');
const moment = require('moment');

class DoacaoEnviada extends Doacao {
    idDoacaoEnviada;
    beneficiario;
    dataEnvio;

    constructor(idDoacaoEnviada, tipo, quantidade, operador, beneficiario) {
        super(tipo, quantidade, operador);
        this.idDoacaoEnviada = idDoacaoEnviada;
        this.beneficiario = beneficiario instanceof Beneficiario ? beneficiario : null;
        this.dataEnvio = moment().format('DD-MM-YYYY HH:mm:ss');
    }

    map() {
        return {
            idDoacaoEnviada: this.idDoacaoEnviada,
            tipo: this.tipo?.map?.() || null,
            quantidade: this.quantidade,
            dataEnvio: this.dataEnvio,
            operador: this.operador?.map?.() || null,
            beneficiario: this.beneficiario?.map?.() || null
        };
    }
}

module.exports = DoacaoEnviada;
