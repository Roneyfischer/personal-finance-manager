import Pool from "pg-pool";
import pg from "pg";
import dbConnect from "../../../../1.model/configDb/dbConect.js";
//chamado por
async function userReader(cpf) {
  const client = await dbConnect();

  const query = {
    // give the query a unique name
    name: "fetch-user",
    text: "SELECT * FROM users WHERE cpf = $1",
    values: [cpf],
  };

  return await client //pega o retorno A1
    .query(query)
    .then((res) => {
      var dataFinded = res.rows[0].pass;
      //console.log("datafinded é: " + dataFinded);
      return dataFinded; //esse é o retorno A1
    })
    .catch((e) => console.error("CPF não encontrado" + e.stack));
}
export default userReader;
