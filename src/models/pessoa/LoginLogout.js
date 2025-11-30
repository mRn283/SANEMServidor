import Operador from "./Operador.js";
import moment from "moment";

class LoginLogout {
    constructor(idRegistro, operador, modo) {
        this.idRegistro = idRegistro;
        this.operador = operador instanceof Operador ? operador : null;
        this.data = moment().format('DD-MM-YYYY HH:mm:ss');
        // modo: 1 = login, 0 = logout
        this.modo = modo === 1 || modo === 0 ? modo : null;
    }

    map() {
        return {
            idRegistro: this.idRegistro,
            operador: this.operador?.map?.() || null,
            data: this.data,
            modo: this.modo
        };
    }
}

export default LoginLogout;
