import Login from "../models/pessoa/Login.js";
import Operador from "../models/pessoa/Operador.js";

let logins = [];
// NOTE: this controller doesn't persist operadores list - it's just demo. Use operadorController's list or shared storage if needed.

export const registrarLogin = (req, res) => {
    const { idLogin, operador } = req.body; // operador can be object or id
    // Accept both operator object or operator id. If operator object passed, try to create class instance
    let operadorInstance = null;
    if (operador && operador.idOperador) {
        operadorInstance = new Operador(operador.idOperador, operador.nome, operador.telefone, operador.endereco, operador.documento, operador.senha, operador.email, operador.permissao);
    }
    const novo = new Login(idLogin, operadorInstance);
    logins.push(novo);
    res.json({ mensagem: "Login registrado", login: novo.map() });
};

export const listarLogins = (req, res) => {
    res.json(logins.map(l => l.map()));
};
