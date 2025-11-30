import DoacaoRecebida from "../models/estoque/recebida/DoacaoRecebida.js";
import Tipo from "../models/estoque/Tipo.js";
import Operador from "../models/pessoa/Operador.js";

let doacoesRecebidas = [];
let tipos = [];
let operadores = [];

export const registrarDoacaoRecebida = (req, res) => {
    const { idDoacaoRecebida, idTipo, quantidade, idOperador } = req.body;

    const tipo = tipos.find(t => String(t.idTipo) === String(idTipo));
    const operador = operadores.find(o => String(o.idOperador) === String(idOperador));

    if (!tipo) return res.status(404).json({ erro: "Tipo não encontrado" });
    if (!operador) return res.status(404).json({ erro: "Operador não encontrado" });

    const nova = new DoacaoRecebida(idDoacaoRecebida, tipo, quantidade, operador);
    doacoesRecebidas.push(nova);
    res.json({ mensagem: "Doação recebida registrada", doacao: nova.map() });
};

export const listarDoacoesRecebidas = (req, res) => {
    res.json(doacoesRecebidas.map(d => d.map()));
};

export const _seed = ({ _tipos = [], _operadores = [] } = {}) => {
    tipos = _tipos;
    operadores = _operadores;
};
