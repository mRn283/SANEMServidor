const Tipo = require('./tipo');

class Estoque {
    
    idEstoque;
    tipo;
    quantidade;

    constructor(idEstoque, tipo, quantidade) {
        this.idEstoque = idEstoque;
        this.tipo = tipo instanceof Tipo ? tipo : null;
        this.quantidade = quantidade ?? 0;
    }

    map() {
        return {
            idEstoque: this.idEstoque,
            tipo: this.tipo?.map?.() || null,
            quantidade: this.quantidade
        };
    }
}

module.exports = Estoque;
