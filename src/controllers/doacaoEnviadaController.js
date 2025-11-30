import CryptoJS from "crypto-js";
import DoacaoEnviada from "../models/estoque/enviada/DoacaoEnviada.js";
import Tipo from "../models/estoque/Tipo.js";
import Operador from "../models/pessoa/Operador.js";
import Beneficiario from "../models/pessoa/Beneficiario.js";

const SECRET = process.env.SECRET_KEY || "MINHA_CHAVE_SECRETA";

// ----------------------
// Funções auxiliares
// ----------------------
function decryptPayload(encrypted) {
    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
        const json = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(json);
    } catch (e) {
        return null;
    }
}

function encryptPayload(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
}

// ----------------------
// "Banco" em memória
// ----------------------
let doacoesEnviadas = [];
let tipos = [];
let operadores = [];
let beneficiarios = [];

// ---------------------------------------------------------------------------
// REGISTRAR DOAÇÃO ENVIADA
// ---------------------------------------------------------------------------
export const registrarDoacaoEnviada = (req, res) => {
    let body = req.body;

    // Se veio criptografado (body.encrypted), descriptografa
    if (body.encrypted) {
        const dec = decryptPayload(body.encrypted);
        if (!dec) return res.status(400).json({ erro: "Falha ao descriptografar dados" });
        body = dec;
    }

    const { idDoacaoEnviada, idTipo, quantidade, idOperador, idBeneficiario } = body;

    const tipo = tipos.find(t => String(t.idTipo) === String(idTipo));
    const operador = operadores.find(o => String(o.idOperador) === String(idOperador));
    const beneficiario = beneficiarios.find(b => String(b.idBeneficiario) === String(idBeneficiario));

    if (!tipo) {
        return res.status(404).json({ encrypted: encryptPayload({ erro: "Tipo não encontrado" }) });
    }
    if (!operador) {
        return res.status(404).json({ encrypted: encryptPayload({ erro: "Operador não encontrado" }) });
    }
    if (!beneficiario) {
        return res.status(404).json({ encrypted: encryptPayload({ erro: "Beneficiário não encontrado" }) });
    }

    const nova = new DoacaoEnviada(idDoacaoEnviada, tipo, quantidade, operador, beneficiario);
    doacoesEnviadas.push(nova);

    const resposta = {
        mensagem: "Doação enviada registrada",
        doacao: nova.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};

// ---------------------------------------------------------------------------
// LISTAR DOAÇÕES ENVIADAS
// ---------------------------------------------------------------------------
export const listarDoacoesEnviadas = (req, res) => {
    const lista = doacoesEnviadas.map(d => d.map());
    res.json({ encrypted: encryptPayload(lista) });
};

// ---------------------------------------------------------------------------
// SEED
// ---------------------------------------------------------------------------
export const _seed = ({ _tipos = [], _operadores = [], _beneficiarios = [] } = {}) => {
    tipos = _tipos;
    operadores = _operadores;
    beneficiarios = _beneficiarios;
};
