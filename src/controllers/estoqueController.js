import CryptoJS from "crypto-js";

import Estoque from "../models/estoque/Estoque.js";
import Tipo from "../models/estoque/Tipo.js";

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
let estoques = [];
let tipos = [];

// ---------------------------------------------------------------------------
// CRIAR ESTOQUE
// ---------------------------------------------------------------------------
export const criarEstoque = (req, res) => {
    let body = req.body;

    // Verifica se veio criptografado
    if (body.encrypted) {
        const dec = decryptPayload(body.encrypted);
        if (!dec) {
            return res.status(400).json({
                encrypted: encryptPayload({ erro: "Falha ao descriptografar dados" })
            });
        }
        body = dec;
    }

    const { idEstoque, idTipo, quantidade } = body;

    const tipo = tipos.find(t => String(t.idTipo) === String(idTipo));
    if (!tipo) {
        return res.status(404).json({
            encrypted: encryptPayload({ erro: "Tipo não encontrado" })
        });
    }

    const novo = new Estoque(idEstoque, tipo, quantidade);
    estoques.push(novo);

    const resposta = {
        mensagem: "Estoque criado",
        estoque: novo.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};

// ---------------------------------------------------------------------------
// LISTAR ESTOQUES
// ---------------------------------------------------------------------------
export const listarEstoques = (req, res) => {
    const lista = estoques.map(e => e.map());
    res.json({ encrypted: encryptPayload(lista) });
};

// ---------------------------------------------------------------------------
// SEED
// ---------------------------------------------------------------------------
export const _seed = (_tipos = []) => {
    tipos = _tipos;
};
