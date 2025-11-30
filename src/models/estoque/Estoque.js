import Tipo from "./Tipo.js";

class Estoque {
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

export default Estoque;
