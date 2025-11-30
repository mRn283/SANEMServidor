import CryptoJS from "crypto-js";
import Operador from "../models/pessoa/Operador.js";

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
// Base em memória
// ----------------------
let operadores = [];


// ---------------------------------------------------------------------------
// CRIAR OPERADOR
// ---------------------------------------------------------------------------
export const criarOperador = (req, res) => {
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

    const { idOperador, nome, telefone, endereco, documento, senha, email, permissao } = body;

    const novo = new Operador(idOperador, nome, telefone, endereco, documento, senha, email, permissao);
    operadores.push(novo);

    const resposta = {
        mensagem: "Operador criado",
        operador: novo.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};


// ---------------------------------------------------------------------------
// LISTAR OPERADORES
// ---------------------------------------------------------------------------
export const listarOperadores = (req, res) => {
    const lista = operadores.map(o => o.map());
    res.json({ encrypted: encryptPayload(lista) });
};


// ---------------------------------------------------------------------------
// OBTER OPERADOR POR ID
// ---------------------------------------------------------------------------
export const obterOperador = (req, res) => {
    const op = operadores.find(o => String(o.idOperador) === String(req.params.id));

    if (!op) {
        return res.status(404).json({
            encrypted: encryptPayload({ erro: "Operador não encontrado" })
        });
    }

    res.json({ encrypted: encryptPayload(op.map()) });
};
