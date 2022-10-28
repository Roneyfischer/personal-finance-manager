import argon2i from "argon2";
import argon2, { hash } from "argon2";
import userReader from "./userReader.js";

async function userLoginValidation(cpf, pwd) {
  var longHash = await userReader(cpf);
  console.log("longHash é: " + longHash);

  try {
    if (await argon2.verify(longHash, pwd)) {
      console.log("Senhas ok");
      return cpf;
    } else {
      console.log("Senha incorreta");
      return false;
    }
  } catch (err) {
    console.log("Erro interno");
    return false;
  }
}

export default userLoginValidation;
