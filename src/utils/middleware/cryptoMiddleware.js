const CryptoJS = require("crypto-js");

const SECRET_KEY = process.env.CRYPTO_SECRET || "chave_super_secreta_256bits";

function decryptData(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const text = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(text);
}

function encryptData(data) {
  const text = JSON.stringify(data);
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}

function cryptoMiddleware(req, res, next) {
  try {
    // DESCRIPTOGRAFAR requisição se vier com payload
    if (req.body?.data) {
      req.decrypted = decryptData(req.body.data);
    }

    // Criar função res.encrypt() para criptografar respostas automaticamente
    res.encrypt = (data) => {
      return res.json({ data: encryptData(data) });
    };

    next();
  } catch (err) {
    return res.status(400).json({ error: "Erro na criptografia/descriptografia" });
  }
}

module.exports = cryptoMiddleware;
