import Tipo from "../models/estoque/Tipo.js";

let tipos = [];

export const criarTipo = (req, res) => {
    const { idTipo, descricao } = req.body;
    const novo = new Tipo(idTipo, descricao);
    tipos.push(novo);
    res.json({ mensagem: "Tipo criado", tipo: novo.map() });
};

export const listarTipos = (req, res) => {
    res.json(tipos.map(t => t.map()));
};

export const obterTipo = (req, res) => {
    const t = tipos.find(x => String(x.idTipo) === String(req.params.id));
    if (!t) return res.status(404).json({ erro: "Tipo não encontrado" });
    res.json(t.map());
};
