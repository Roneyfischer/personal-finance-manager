//
//
//
//
//
//
//

async function sendPostUserLogin(type, a, b) {
  // console.log("entramos em sendPostUserLogin");
  reqBody = {
    cpf: a,
    pwd: b,
  };

  // console.log("AQUIIIIIII 1:  " + reqBody.cpf);
  // console.log("AQUIIIIIII 1:  " + reqBody.pwd);

  fetch(`https://fischerserver.shop/auth/userLogin`, {

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify(reqBody),
  })
    .then((res) => {
      
     
    }) //limpar campo
    .catch(); //limpar campo
}
