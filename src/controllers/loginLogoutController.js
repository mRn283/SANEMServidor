import CryptoJS from "crypto-js";

import LoginLogout from "../models/pessoa/LoginLogout.js";
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
let registros = [];
let operadores = []; // lista local para simulação de banco


// ---------------------------------------------------------------------------
// REGISTRAR LOGIN / LOGOUT
// ---------------------------------------------------------------------------
export const registrarAcesso = (req, res) => {
    let body = req.body;

    // Caso venha criptografado
    if (body.encrypted) {
        const dec = decryptPayload(body.encrypted);
        if (!dec) {
            return res.status(400).json({
                encrypted: encryptPayload({ erro: "Falha ao descriptografar dados" })
            });
        }
        body = dec;
    }

    const { idRegistro, idOperador, modo } = body;

    if (modo !== 0 && modo !== 1) {
        return res.status(400).json({
            encrypted: encryptPayload({ erro: "modo deve ser 1 (login) ou 0 (logout)" })
        });
    }

    const operador = operadores.find(o => String(o.idOperador) === String(idOperador));
    if (!operador) {
        return res.status(404).json({
            encrypted: encryptPayload({ erro: "Operador não encontrado. Crie um operador primeiro." })
        });
    }

    const novo = new LoginLogout(idRegistro, operador, modo);
    registros.push(novo);

    const resposta = {
        mensagem: "Registro login/logout criado",
        registro: novo.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};


// ---------------------------------------------------------------------------
// LISTAR REGISTROS
// ---------------------------------------------------------------------------
export const listarAcessos = (req, res) => {
    const lista = registros.map(r => r.map());
    res.json({ encrypted: encryptPayload(lista) });
};


// ---------------------------------------------------------------------------
// Função auxiliar para testes
// ---------------------------------------------------------------------------
export const _seedOperadores = (ops) => { operadores = ops; };
