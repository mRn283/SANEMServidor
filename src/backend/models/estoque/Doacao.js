const Tipo = require('../tipo/tipo');
const Operador = require('../../pessoa/operador');
const moment = require('moment');

class Doacao {
    tipo;
    quantidade;
    data;
    operador;

    constructor(tipo, quantidade, operador) {
        this.tipo = tipo instanceof Tipo ? tipo : null;
        this.quantidade = quantidade ?? 0;
        this.data = moment().format('DD-MM-YYYY HH:mm:ss');
        this.operador = operador instanceof Operador ? operador : null;
    }

    map() {
        return {
            tipo: this.tipo?.map?.() || null,
            quantidade: this.quantidade,
            data: this.data,
            operador: this.operador?.map?.() || null
        };
    }
}

module.exports = Doacao;
