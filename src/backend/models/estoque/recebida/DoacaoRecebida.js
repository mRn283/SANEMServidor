const Doacao = require('../Doacao');

class DoacaoRecebida extends Doacao {
    idDoacaoRecebida;

    constructor(idDoacaoRecebida, tipo, quantidade, operador) {
        super(tipo, quantidade, operador);
        this.idDoacaoRecebida = idDoacaoRecebida;
    }

    map() {
        return {
            idDoacaoRecebida: this.idDoacaoRecebida,
            tipo: this.tipo.map(),
            quantidade: this.quantidade,
            dataRecebimento: this.dataRecebimento,
            operador: this.operador.map()
        };
    }
}

module.exports = DoacaoRecebida;