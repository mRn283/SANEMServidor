const CryptoJS = require("crypto-js");

const SECRET_KEY = process.env.CRYPTO_SECRET || "chaveSanem";

function encrypt(data) {
  const text = JSON.stringify(data);
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}

function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
}

module.exports = { encrypt, decrypt };
