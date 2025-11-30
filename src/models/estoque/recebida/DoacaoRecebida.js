import Doacao from "../Doacao.js";
import moment from "moment";

class DoacaoRecebida extends Doacao {
    constructor(idDoacaoRecebida, tipo, quantidade, operador) {
        super(tipo, quantidade, operador);
        this.idDoacaoRecebida = idDoacaoRecebida;
        this.dataRecebimento = moment().format('DD-MM-YYYY HH:mm:ss');
    }

    map() {
        return {
            idDoacaoRecebida: this.idDoacaoRecebida,
            tipo: this.tipo?.map?.() || null,
            quantidade: this.quantidade,
            dataRecebimento: this.dataRecebimento,
            operador: this.operador?.map?.() || null
        };
    }
}

export default DoacaoRecebida;
