



import dbAddError from "../../../1.model/methodsDb/6.dbAddError.js";
import basicCrypt from "../../crypto/basicCrypt.js";
import dbConnect from "../../../1.model/configDb/dbConect.js";
import pg from "pg";

//chamado por
async function addNewCategory(reqBody) {

  console.log("Estamos no addNewCategory.js");
    
  let {category, user} = reqBody
  console.log(subCategory)
  console.log(category)
  console.log(user)

    user = await basicCrypt(user);



  const text =
    'INSERT INTO "subCategories"("singularSubCategory", "singularCategory" "singularUser") VALUES($1, $2, $3) RETURNING *';
  const values = [subcategory, category, user];
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

export default addNewCategory;