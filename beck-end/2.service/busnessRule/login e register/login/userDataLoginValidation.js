//verificar se o user não tem cadastro;
//se tiver cadastro, redireciona pro banco de cadastro

import * as dotenv from "dotenv";
import userLoginValidation from "./userLoginValidation.js";
import basicCrypt from "../../../crypto/basicCrypt.js";

dotenv.config();

async function userDataLoginValidation(reqBody) {
  var validation = 1;
  var { cpf, pwd } = reqBody;
  pwd = await basicCrypt(pwd);
  cpf = await basicCrypt(cpf);

  if (!cpf) {
    console.log((validation = "cpf vazio"));
  }
  if (!pwd) {
    console.log((validation = "pwd vazio"));
  }

  if (validation == 1) {
    console.log((validation = "DADOS VALIDADOS COM SUCESSO!!"));
    console.log("senha pesquisada:" + pwd);
    console.log("cpf pesquisado:" + cpf);
    return userLoginValidation(cpf, pwd);
  } else {
    console.log("Erro na validação de dados. Algum campo com problema: ");
    return false;
  }
}

export default userDataLoginValidation;
