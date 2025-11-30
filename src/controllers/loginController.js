import CryptoJS from "crypto-js";

import Login from "../models/pessoa/Login.js";
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
let logins = [];

// ---------------------------------------------------------------------------
// REGISTRAR LOGIN
// ---------------------------------------------------------------------------
export const registrarLogin = (req, res) => {
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

    const { idLogin, operador } = body;

    let operadorInstance = null;

    // operador pode vir como objeto ou referência
    if (operador && operador.idOperador) {
        operadorInstance = new Operador(
            operador.idOperador,
            operador.nome,
            operador.telefone,
            operador.endereco,
            operador.documento,
            operador.senha,
            operador.email,
            operador.permissao
        );
    }

    const novo = new Login(idLogin, operadorInstance);
    logins.push(novo);

    const resposta = {
        mensagem: "Login registrado",
        login: novo.map()
    };

    res.json({ encrypted: encryptPayload(resposta) });
};

// ---------------------------------------------------------------------------
// LISTAR LOGINS
// ---------------------------------------------------------------------------
export const listarLogins = (req, res) => {
    const lista = logins.map(l => l.map());
    res.json({ encrypted: encryptPayload(lista) });
};
