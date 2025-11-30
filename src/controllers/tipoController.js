import CryptoJS from "crypto-js";
import Tipo from "../models/estoque/Tipo.js";

const SECRET = process.env.SECRET_KEY || "MINHA_CHAVE_SECRETA";

// ----------------------
// Funções auxiliares
// ----------------------
function decryptPayload(encrypted) {
    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
        const dec = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(dec);
    } catch (error) {
        return null;
    }
}

function encryptPayload(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
}

// ----------------------
// Armazenamento em memória
// ----------------------
let tipos = [];


// ---------------------------------------------------------------------------
// CRIAR TIPO
// ---------------------------------------------------------------------------
export const criarTipo = (req, res) => {
    let body = req.body;

    // Se veio criptografado
    if (body.encrypted) {
        const dec = decryptPayload(body.encrypted);
        if (!dec) {
            return res.status(400).json({
                encrypted: encryptPayload({ erro: "Falha ao descriptografar dados" })
            });
        }
        body = dec;
    }

    const { idTipo, descricao } = body;

    const novo = new Tipo(idTipo, descricao);
    tipos.push(novo);

    const resposta = {
        mensagem: "Tipo criado",
        tipo: novo.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};


// ---------------------------------------------------------------------------
// LISTAR TIPOS
// ---------------------------------------------------------------------------
export const listarTipos = (req, res) => {
    const lista = tipos.map(t => t.map());
    res.json({ encrypted: encryptPayload(lista) });
};


// ---------------------------------------------------------------------------
// OBTER TIPO POR ID
// ---------------------------------------------------------------------------
export const obterTipo = (req, res) => {
    const t = tipos.find(x => String(x.idTipo) === String(req.params.id));

    if (!t) {
        return res.status(404).json({
            encrypted: encryptPayload({ erro: "Tipo não encontrado" })
        });
    }

    res.json({ encrypted: encryptPayload(t.map()) });
};
