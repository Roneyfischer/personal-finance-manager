

import dbConnect from "./../../../../1.model/configDb/dbConect.js"
import addNewUserRegister from "./../../../../1.model/methodsDb/addNewUserRegister.js"

async function registerUser(userBody) {
    console.log("estamos em register no OO" + userBody);
    await dbConnect();
    await addNewUserRegister(userBody);
  }

  export default registerUser;