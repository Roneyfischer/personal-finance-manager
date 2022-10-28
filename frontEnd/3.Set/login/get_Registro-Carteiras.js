//
//
//
//
//
//
//

async function sendGetRegisterWallet() {
  fetch(`https://fischerserver.shop/auth/loggedArea`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
    },
    method: "GET",
    credentials: "include",
    body: JSON.stringify(reqBody),
  })
    .then((res) => {}) //limpar campo
    .catch(); //limpar campo
}
