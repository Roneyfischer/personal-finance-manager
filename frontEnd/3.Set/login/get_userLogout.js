//
//
//
//
//
//
//

async function sendGetUserLogout(type, a, b) {
  fetch(`https://fischerserver.shop/logout`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
    },
    method: "GET",
    credentials: "include",
  })
    .then((res) => {}) //limpar campo
    .catch(); //limpar campo
}
