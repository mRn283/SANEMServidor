import LoginLogout from "../models/pessoa/LoginLogout.js";
import Operador from "../models/pessoa/Operador.js";

let registros = [];
let operadores = []; // local copy; for tests you can create operadores via operadorController

export const registrarAcesso = (req, res) => {
    const { idRegistro, idOperador, modo } = req.body;

    if (modo !== 0 && modo !== 1) return res.status(400).json({ erro: "modo deve ser 1 (login) ou 0 (logout)" });

    const operador = operadores.find(o => String(o.idOperador) === String(idOperador));
    if (!operador) return res.status(404).json({ erro: "Operador não encontrado. Crie um operador primeiro." });

    const novo = new LoginLogout(idRegistro, operador, modo);
    registros.push(novo);
    res.json({ mensagem: "Registro login/logout criado", registro: novo.map() });
};

export const listarAcessos = (req, res) => {
    res.json(registros.map(r => r.map()));
};

// helper: to let tests add operadores to this controller's local list if needed
export const _seedOperadores = (ops) => { operadores = ops; };
