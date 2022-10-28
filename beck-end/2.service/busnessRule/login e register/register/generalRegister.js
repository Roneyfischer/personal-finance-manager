

import basicCrypt from "../../../crypto/basicCrypt.js";
import argonCrypt from "../../../crypto/argonCrypt.js";
import * as dotenv from "dotenv";

dotenv.config();

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
      return validation;
    } else {
      return false;
    }
  }

async function finalEncrypt(reqBody) {
  var { user, email, cpf, pwd, confirmPwd } = reqBody;
  user = await basicCrypt(user);
  cpf = await basicCrypt(cpf);
  email = await basicCrypt(email);
  pwd = await basicCrypt(pwd);

  console.log("Senha with Basic Crypt: " + pwd);

  await argonCrypt(pwd, reqBody)
    .then((res) => {pwd = res; })
    .catch(console.log("Eror on argonCrypt. Documment finalEncrypt.js. By: rfss"));

  reqBody = { // substituindo por dados criptografados
    
    user,
    cpf,
    email,
    pwd,
  };

  
  return reqBody;
}


async function registerUser(userBody) {
    
    await dbConnect();
    await addNewUserRegister(userBody);
  }

export default {
    dataValidation: userDataRegisterValidation,
    finalEncrypt: finalEncrypt,
    register: registerUser   
}
