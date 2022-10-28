import basicCrypt from "../../../crypto/basicCrypt.js";
import argonCrypt from "../../../crypto/argonCrypt.js";
import genericUser from "../../../../3.Controller/Controls/genericUser.js";

async function finalEncrypt(reqBody) {
  var { user, email, cpf, pwd, confirmPwd } = reqBody;
  user = await basicCrypt(user);
  cpf = await basicCrypt(cpf);
  email = await basicCrypt(email);
  pwd = await basicCrypt(pwd);

  console.log("Senha with Basic Crypt: " + pwd);

  await argonCrypt(pwd, reqBody)
    .then((res) => {
      pwd = res;
    })
    .catch(
      console.log("Eror on argonCrypt. Documment finalEncrypt.js. By: rfss")
    );

  console.log("User:   ***   " + user);
  console.log("CPF:   ***   " + cpf);
  console.log("EMAIL:   ***   " + email);
  console.log("PWD:   ***   " + pwd);

  reqBody = ""; //tira os dados não criptografados
  reqBody = {
    // substituindo por dados criptografados

    user,
    cpf,
    email,
    pwd,
  };

  return reqBody;
}

export default finalEncrypt;
