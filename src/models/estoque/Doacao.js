import Tipo from "./Tipo.js";
import Operador from "../pessoa/Operador.js";
import moment from "moment";

class Doacao {
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

export default Doacao;
