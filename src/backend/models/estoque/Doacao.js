const Tipo = require('../tipo/tipo');
const Operador = require('../../pessoa/operador');
import moment from 'moment';
class Doacao{
    tipo;
    quantidade;
    data;
    Operador;

    constructor(tipo, quantidade, operador) {
        this.tipo = tipo instanceof Tipo;
        this.quantidade = quantidade;
        this.data= moment().format('DD-MM-YYYY HH:mm:s');
        this.operador = operador instanceof Operador;
    }

}
module.exports = Doacao;