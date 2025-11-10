const Doacao = require('../Doacao');
const moment = require('moment');

class DoacaoRecebida extends Doacao {
    idDoacaoRecebida;
    dataRecebimento;

    constructor(idDoacaoRecebida, tipo, quantidade, operador) {
        super(tipo, quantidade, operador);
        this.idDoacaoRecebida = idDoacaoRecebida;
        this.dataRecebimento = moment().format('DD-MM-YYYY HH:mm:ss');
    }

    map() {
        return {
            idDoacaoRecebida: this.idDoacaoRecebida,
            tipo: this.tipo?.map?.() || null,
            quantidade: this.quantidade,
            dataRecebimento: this.dataRecebimento,
            operador: this.operador?.map?.() || null
        };
    }
}

module.exports = DoacaoRecebida;
