const DoacaoRecebida = require('./DoacaoRecebida');
const Estoque = require('../estoque');
const Tipo = require('../tipo/tipo');

class DoacaoRecebidaEstoque {
    doacaoRecebida;
    estoque;
    quantidade;
    tipo;

    constructor(doacaoRecebida, estoque, quantidade, tipo) {
        this.doacaoRecebida = doacaoRecebida instanceof DoacaoRecebida ? doacaoRecebida : null;
        this.estoque = estoque instanceof Estoque ? estoque : null;
        this.quantidade = quantidade ?? 0;
        this.tipo = tipo instanceof Tipo ? tipo : null;
    }

    map() {
        return {
            doacaoRecebida: this.doacaoRecebida?.map?.() || null,
            estoque: this.estoque?.map?.() || null,
            quantidade: this.quantidade,
            tipo: this.tipo?.map?.() || null
        };
    }
}

module.exports = DoacaoRecebidaEstoque;
