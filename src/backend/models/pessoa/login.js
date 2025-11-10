const Operador = require('./Operador');
const moment = require('moment');

class Login {
    idLogin;
    operador;
    dataLogin;

    constructor(idLogin, operador) {
        this.idLogin = idLogin;
        this.operador = operador instanceof Operador ? operador : null;
        this.dataLogin = moment().format('DD-MM-YYYY HH:mm:ss');
    }

    map() {
        return {
            idLogin: this.idLogin,
            operador: this.operador ? this.operador.map() : null,
            dataLogin: this.dataLogin
        };
    }
}

module.exports = Login;
