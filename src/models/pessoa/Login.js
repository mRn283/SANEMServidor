import Operador from "./Operador.js";
import moment from "moment";

class Login {
    constructor(idLogin, operador) {
        this.idLogin = idLogin;
        this.operador = operador instanceof Operador ? operador : null;
        this.dataLogin = moment().format('DD-MM-YYYY HH:mm:ss');
    }

    map() {
        return {
            idLogin: this.idLogin,
            operador: this.operador?.map?.() || null,
            dataLogin: this.dataLogin
        };
    }
}

export default Login;
