async function sendGetUserProfile() {
  fetch(`https://fischerserver.shop/user/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
    },
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      console.log(res);
    }) //limpar campo
    .catch(); //limpar campo
}
