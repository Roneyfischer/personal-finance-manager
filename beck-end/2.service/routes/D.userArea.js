import express from "express";
import addNewWallet from "../busnessRule/wallets/addNewWallet.js";
import addNewCategory from "../busnessRule/categeroies/addNewCategory.js";

const loggedRoutes = express.Router();

loggedRoutes

  //profile
  .get("/", (req, res) => {
    res
      .status(200)
      .send(
        "Cookie identificado. Valor: " +
          req.cookies +
          " + fim: " +
          req.cookies.access_token
      );
  })

  .post("/viewMProfile", (req, res) => {})
  .post("/editMProfile", (req, res) => {})

  //search
  .post("/viewSearch", (req, res) => {})
  .post("/newSearch", (req, res) => {})

  //budget
  .post("/viewBudget", (req, res) => {})
  .post("/editBudget", (req, res) => {})

  //wallet
  .post("/viewtWallet", (req, res) => {})
  .post("/addWallet", (req, res) => {
    res.status(200).json({ msg: "Adicionando carteira" });
    addNewWallet(req.body);
  })
  .post("/edittWallet", (req, res) => {})

  //category
  .post("/viewCategory", (req, res) => {})
  .post("/addCategory", (req, res) => {
    res.status(200).json({ msg: "Adicionando carteira" });
    addNewCategory(req.body);
  })
  .post("/editCategory", (req, res) => {})

  //transactions
  .post("/viewTransaction", (req, res) => {})
  .post("/editTransaction", (req, res) => {});

export default loggedRoutes;
