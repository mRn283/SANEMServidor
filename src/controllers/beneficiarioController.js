import Beneficiario from "../models/pessoa/Beneficiario.js";

let beneficiarios = [];

export const criarBeneficiario = (req, res) => {
    const { idBeneficiario, nome, telefone, endereco, documento, aprovado, email } = req.decrypted;

    const novo = new Beneficiario(
        idBeneficiario,
        nome,
        telefone,
        endereco,
        documento,
        aprovado,
        email
    );

    beneficiarios.push(novo);

    return res.encrypt({
        mensagem: "Beneficiário criado",
        beneficiario: novo.map()
    });
};

export const listarBeneficiarios = (req, res) => {
    return res.encrypt(
        beneficiarios.map(b => b.map())
    );
};

export const obterBeneficiario = (req, res) => {
    const id = req.params.id;

    const encontrado = beneficiarios.find(
        b => String(b.idBeneficiario) === String(id)
    );

    if (!encontrado) {
        return res.encrypt({
            erro: "Beneficiário não encontrado"
        });
    }

    return res.encrypt(encontrado.map());
};
