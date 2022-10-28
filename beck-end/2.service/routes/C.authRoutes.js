import express from "express";

import userInputLoginValidation from "../busnessRule/login e register/login/userDataLoginValidation.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import verifyJWT from "./jwtToken.js";
import genericUser from "../../3.Controller/Class/user.js";

const userRoutes = express.Router();

userRoutes

  .post("/userLogin", (req, res) => {
    teste();
    async function teste() {
      var statusLogin = await userInputLoginValidation(req.body);

      if (statusLogin) {
        let token = jwt.sign(
          {
            id_user: statusLogin, // aqui é o CPF criptografado com SHA512
            //adicionar número randomico e salvar em alguma variável do banco de dados do usuário a cada login?
          },
          process.env.JWT_KEY
        );
        var date = new Date();
        res.cookie("access_token", token, {
          //httpOnly: true,
          secure: true,
          sameSite: "none",
          expire: 500000,
        });

        res.json({ token: token });
      }
      console.log(statusLogin);
      if (!statusLogin) {
        res
          .clearCookie("access_token")
          .status(401)
          .json({ msg: "authentication failed" });
      }
    }
  })
  .post("/userRegister", (req, res) => {
    res.status(200).json({ msg: "Efetuando registro" });

    const userScreen = new genericUser(req.body);
    userScreen.register(req.body);
  })

  //GETS

  //LOGOUT
  .get("/logout", (req, res) => {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ msg: "user successfully logged out" });
    console.log("user logged out");
  })

  //ACESSOS:
  .get("/loggedArea", verifyJWT, (req, res, next) => {
    console.log("Retornou todos clientes!");
    res.json([{ msg: "Usuário Logado com sucesso!" }]);
  })

  .get("/userRegister", (req, res) => {
    res.status(200).json;
  });

export default userRoutes;
