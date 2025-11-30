import Estoque from "../models/estoque/Estoque.js";
import Tipo from "../models/estoque/Tipo.js";

let estoques = [];
let tipos = [];

export const criarEstoque = (req, res) => {
    const { idEstoque, idTipo, quantidade } = req.body;
    const tipo = tipos.find(t => String(t.idTipo) === String(idTipo));
    if (!tipo) return res.status(404).json({ erro: "Tipo não encontrado" });
    const novo = new Estoque(idEstoque, tipo, quantidade);
    estoques.push(novo);
    res.json({ mensagem: "Estoque criado", estoque: novo.map() });
};

export const listarEstoques = (req, res) => {
    res.json(estoques.map(e => e.map()));
};

export const _seed = (_tipos = []) => { tipos = _tipos; };
