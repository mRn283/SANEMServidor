import DoacaoEnviada from "../models/estoque/enviada/DoacaoEnviada.js";
import Tipo from "../models/estoque/Tipo.js";
import Operador from "../models/pessoa/Operador.js";
import Beneficiario from "../models/pessoa/Beneficiario.js";

let doacoesEnviadas = [];
let tipos = [];
let operadores = [];
let beneficiarios = [];

// endpoints expect ids; this is simple linking in-memory
export const registrarDoacaoEnviada = (req, res) => {
    const { idDoacaoEnviada, idTipo, quantidade, idOperador, idBeneficiario } = req.body;

    const tipo = tipos.find(t => String(t.idTipo) === String(idTipo));
    const operador = operadores.find(o => String(o.idOperador) === String(idOperador));
    const beneficiario = beneficiarios.find(b => String(b.idBeneficiario) === String(idBeneficiario));

    if (!tipo) return res.status(404).json({ erro: "Tipo não encontrado" });
    if (!operador) return res.status(404).json({ erro: "Operador não encontrado" });
    if (!beneficiario) return res.status(404).json({ erro: "Beneficiário não encontrado" });

    const nova = new DoacaoEnviada(idDoacaoEnviada, tipo, quantidade, operador, beneficiario);
    doacoesEnviadas.push(nova);
    res.json({ mensagem: "Doação enviada registrada", doacao: nova.map() });
};

export const listarDoacoesEnviadas = (req, res) => {
    res.json(doacoesEnviadas.map(d => d.map()));
};

// helper seeds
export const _seed = ({ _tipos = [], _operadores = [], _beneficiarios = [] } = {}) => {
    tipos = _tipos;
    operadores = _operadores;
    beneficiarios = _beneficiarios;
};
