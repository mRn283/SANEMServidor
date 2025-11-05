const Tipo = require('./tipo');

class Estoque {

    idEstoque;
    tipo;
    quantidade;
    

    constructor(idEstoque, tipo, quantidade) {
        this.idEstoque = idEstoque;
        this.tipo = tipo instanceof Tipo;
        this.quantidade = quantidade;
    }

    map() {
        return {
            idEstoque: this.idEstoque,
            tipo: this.tipo?.map?.(),
            quantidade: this.quantidade
        };
    }

}

module.exports = Estoque;
