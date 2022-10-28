
import dbAddError from "../../../1.model/methodsDb/6.dbAddError.js";
import basicCrypt from "../../crypto/basicCrypt.js";
import dbConnect from "../../../1.model/configDb/dbConect.js";
import pg from "pg";

//chamado por
async function addNewWallet(reqBody) {
    console.log("Estamos no addNewWallet.js");
    
    let {wallet, user} = reqBody
    console.log(wallet)
    console.log(user)
  
  user = await basicCrypt(user);

  const text =
    'INSERT INTO "wallets"("singularWallet", "singularUser") VALUES($1, $2) RETURNING *';
  const values = [wallet, user];
  const client = await dbConnect();
  await client
    .query(text, values)
    .then((res) => {
      console.log(res.rows[0]);
      return true;
    })
    .catch((error) => {
      dbAddError(error);
      return false;
    });
}

export default addNewWallet;