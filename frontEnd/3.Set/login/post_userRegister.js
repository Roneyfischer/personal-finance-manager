//
//
//
//
//
//
//

async function sendPosUserRegister(type, a, b, c, d, e) {
  reqBody = {
    user: a,
    email: b,
    cpf: c,
    pwd: d,
    confirmPwd: e,
  };

  console.log("AQUIIIIIII 1:  " + reqBody.user);
  console.log("AQUIIIIIII 1:  " + reqBody.email);
  console.log("AQUIIIIIII 1:  " + reqBody.cpf);
  console.log("AQUIIIIIII 1:  " + reqBody.pwd);
  console.log("AQUIIIIIII 1:  " + reqBody.confirmPwd);

  fetch(`https://fischerserver.shop/auth/userRegister`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
    },
    method: "POST",
    body: JSON.stringify(reqBody),
  })
    .then(() => {
      limpacampos(a, b, c, d, e);
    })
    .catch(console.error(), limpacampos(a, b, c, d, e));
}

function limpacampos(a, b, c, d, e) {}
