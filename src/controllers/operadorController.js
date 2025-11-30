import Operador from "../models/pessoa/Operador.js";

let operadores = []; // in-memory

export const criarOperador = (req, res) => {
    const { idOperador, nome, telefone, endereco, documento, senha, email, permissao } = req.body;
    const novo = new Operador(idOperador, nome, telefone, endereco, documento, senha, email, permissao);
    operadores.push(novo);
    res.json({ mensagem: "Operador criado", operador: novo.map() });
};

export const listarOperadores = (req, res) => {
    res.json(operadores.map(o => o.map()));
};

export const obterOperador = (req, res) => {
    const op = operadores.find(o => String(o.idOperador) === String(req.params.id));
    if (!op) return res.status(404).json({ erro: "Operador não encontrado" });
    res.json(op.map());
};
