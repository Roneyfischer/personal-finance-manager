//verificar se o user não tem cadastro;
//se tiver cadastro, redireciona pro banco de cadastro

import * as dotenv from "dotenv";

dotenv.config();
//Called by indexRegister.js
async function userDataRegisterValidation(reqBody) {
  var validation = 1;
  const { user, email, cpf, pwd } = reqBody;
  console.log(reqBody);
  if (!reqBody.user) {
    console.log((validation = "User vazio"));
  }
  if (!reqBody.email) {
    console.log((validation = "Email vazio"));
  }
  if (!reqBody.cpf) {
    console.log((validation = "cpf vazio"));
  }
  if (!reqBody.pwd) {
    console.log((validation = "pwd vazio"));
  }
  if (!reqBody.confirmPwd) {
    console.log((validation = "confirmPwd vazio"));
  }
  if (reqBody.pwd != reqBody.confirmPwd) {
    console.log((validation = "Senhas não conferem"));
  }

  if (validation == 1) {
    console.log((validation = "DADOS VALIDADOS COM SUCESSO!!"));
    return true;
  } else {
    return false;
  }
}

export default userDataRegisterValidation;
