import DoacaoEnviada from "./DoacaoEnviada.js";
import Estoque from "../Estoque.js";
import Tipo from "../Tipo.js";

class DoacaoEnviadaEstoque {
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

export default DoacaoEnviadaEstoque;
