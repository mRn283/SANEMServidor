const DoacaoEnviada = require('./DoacaoEnviada');
const Estoque = require('../estoque');
const tipo = require('../tipo/tipo');

class DoacaoEnviadaEstoque {
    doacaoEnviada;
    estoque;
    quantidade;
    tipo;

    constructor(doacaoEnviada, estoque, quantidade, tipo) {
        this.doacaoEnviada = doacaoEnviada instanceof DoacaoEnviada.idDoacaoEnviada;
        this.estoque = estoque instanceof Estoque.idEstoque;
        this.quantidade = quantidade instanceof DoacaoEnviada.quantidade;
        this.tipo = tipo instanceof tipo.idTipo;
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
