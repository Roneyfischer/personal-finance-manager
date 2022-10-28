import dbConnect from "../configDb/dbConect.js";
import dbAddError from "./6.dbAddError.js";
import pg from "pg";

//chamado por
async function addNewUserRegister(reqBody) {
  console.log(reqBody);
  const { user, cpf, email, pwd } = reqBody;
  console.log("Estamos no addNewUserRegister.js");

  const text =
    'INSERT INTO "users"("singularUser", "cpf", "email", "pass") VALUES($1, $2, $3, $4) RETURNING *';
  const values = [user, cpf, email, pwd];
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

export default addNewUserRegister;
