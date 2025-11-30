import Beneficiario from "../models/pessoa/Beneficiario.js";

let beneficiarios = [];

export const criarBeneficiario = (req, res) => {
    const { idBeneficiario, nome, telefone, endereco, documento, aprovado, email } = req.body;
    const novo = new Beneficiario(idBeneficiario, nome, telefone, endereco, documento, aprovado, email);
    beneficiarios.push(novo);
    res.json({ mensagem: "Beneficiário criado", beneficiario: novo.map() });
};

export const listarBeneficiarios = (req, res) => {
    res.json(beneficiarios.map(b => b.map()));
};

export const obterBeneficiario = (req, res) => {
    const b = beneficiarios.find(x => String(x.idBeneficiario) === String(req.params.id));
    if (!b) return res.status(404).json({ erro: "Beneficiário não encontrado" });
    res.json(b.map());
};
