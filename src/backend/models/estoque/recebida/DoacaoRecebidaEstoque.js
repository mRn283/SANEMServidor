const DoacaoEnviada = require('./DoacaoRecebida');
const Estoque = require('../estoque');
const tipo = require('../tipo/tipo');

class DoacaoRecebidaEstoque {
    doacaoRecebida;
    estoque;
    quantidade;
    tipo;

    constructor(doacaoRecebida, estoque, quantidade, tipo) {
        this.doacaoRecebida = doacaoRecebida instanceof DoacaoRecebida.idDoacaoRecebida;
        this.estoque = estoque instanceof Estoque.idEstoque;
        this.quantidade = quantidade instanceof DoacaoEnviada.quantidade;
        this.tipo = tipo instanceof tipo.idTipo;
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