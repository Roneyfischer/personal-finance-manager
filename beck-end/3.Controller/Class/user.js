import userDataLoginValidation from "../../2.service/busnessRule/login e register/login/userDataLoginValidation.js";
import userLoginValidation from "../../2.service/busnessRule/login e register/login/userLoginValidation.js";
import userDataRegisterValidation from "../../2.service/busnessRule/login e register/register/userDataRegisterValidation.js";
import addNewCategory from "../../2.service/busnessRule/categeroies/addNewCategory.js";
import addNewSubCategory from "../../2.service/busnessRule/categeroies/addNewSubCategory.js";
import addNewWallet from "../../2.service/busnessRule/wallets/addNewWallet.js";
import finalEncrypt from "../../2.service/busnessRule/login e register/register/finalEncrypt.js";
import registerUser from "../../2.service/busnessRule/login e register/register/registerUser.js";
import addNewUserRegister from "../../1.model/methodsDb/addNewUserRegister.js";
import dbConnect from "../../1.model/configDb/dbConect.js";

class genericUser {
  constructor(reqBody) {
    const { user, email, cpf, pwd } = reqBody;
    reqBody = reqBody;

    this.user = user;
    this.email = email;
    this.cpf = cpf;
    this.pwd = pwd;
    this.reqBody = reqBody;

    const userBody = this.reqBody;
  }

  register(userBody) {
    registration(userBody);
    async function registration(userBody) {
      const dataEncryptedBasic = await finalEncrypt(userBody);
      userDataRegisterValidation(userBody)
        ? registerUser(dataEncryptedBasic)
        : false;
    }
  }

  login(userBody) {
    userDataLoginValidation(userBody) ? userLoginValidation(userBody) : false;
  }

  addCategory(userBody) {
    addNewCategory(userBody);
  }

  addSubCategory(userBody) {
    addNewSubCategory(userBody);
  }

  addWallet(userBody) {
    addNewWallet(userBody);
  }
}

export default genericUser;
