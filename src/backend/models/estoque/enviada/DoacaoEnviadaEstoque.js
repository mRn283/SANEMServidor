const DoacaoEnviada = require('./DoacaoEnviada');
const Estoque = require('../estoque');
const Tipo = require('../tipo/tipo');

class DoacaoEnviadaEstoque {
    doacaoEnviada;
    estoque;
    quantidade;
    tipo;

    constructor(doacaoEnviada, estoque, quantidade, tipo) {
        this.doacaoEnviada = doacaoEnviada instanceof DoacaoEnviada ? doacaoEnviada : null;
        this.estoque = estoque instanceof Estoque ? estoque : null;
        this.quantidade = quantidade ?? 0;
        this.tipo = tipo instanceof Tipo ? tipo : null;
    }

    map() {
        return {
            doacaoEnviada: this.doacaoEnviada?.map?.() || null,
            estoque: this.estoque?.map?.() || null,
            quantidade: this.quantidade,
            tipo: this.tipo?.map?.() || null
        };
    }
}

module.exports = DoacaoEnviadaEstoque;
