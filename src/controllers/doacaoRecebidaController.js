import CryptoJS from "crypto-js";
import DoacaoRecebida from "../models/estoque/recebida/DoacaoRecebida.js";
import Tipo from "../models/estoque/Tipo.js";
import Operador from "../models/pessoa/Operador.js";

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
// Base em memória
// ----------------------
let doacoesRecebidas = [];
let tipos = [];
let operadores = [];

// ---------------------------------------------------------------------------
// REGISTRAR DOAÇÃO RECEBIDA
// ---------------------------------------------------------------------------
export const registrarDoacaoRecebida = (req, res) => {
    let body = req.body;

    // Se os dados vierem criptografados
    if (body.encrypted) {
        const dec = decryptPayload(body.encrypted);
        if (!dec) {
            return res.status(400).json({
                encrypted: encryptPayload({ erro: "Falha ao descriptografar dados" })
            });
        }
        body = dec;
    }

    const { idDoacaoRecebida, idTipo, quantidade, idOperador } = body;

    const tipo = tipos.find(t => String(t.idTipo) === String(idTipo));
    const operador = operadores.find(o => String(o.idOperador) === String(idOperador));

    if (!tipo) {
        return res.status(404).json({
            encrypted: encryptPayload({ erro: "Tipo não encontrado" })
        });
    }

    if (!operador) {
        return res.status(404).json({
            encrypted: encryptPayload({ erro: "Operador não encontrado" })
        });
    }

    const nova = new DoacaoRecebida(idDoacaoRecebida, tipo, quantidade, operador);
    doacoesRecebidas.push(nova);

    const resposta = {
        mensagem: "Doação recebida registrada",
        doacao: nova.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};

// ---------------------------------------------------------------------------
// LISTAR DOAÇÕES RECEBIDAS
// ---------------------------------------------------------------------------
export const listarDoacoesRecebidas = (req, res) => {
    const lista = doacoesRecebidas.map(d => d.map());
    res.json({ encrypted: encryptPayload(lista) });
};

// ---------------------------------------------------------------------------
// SEED
// ---------------------------------------------------------------------------
export const _seed = ({ _tipos = [], _operadores = [] } = {}) => {
    tipos = _tipos;
    operadores = _operadores;
};
