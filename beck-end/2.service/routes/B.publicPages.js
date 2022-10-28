import express from "express";

const publicPages = express.Router();

publicPages
  .post("/", async (req, res) => {
    res.status(200).json({ msg: "Pagina inicial" });
    // addNewUserDb(req.body);
  })

  .post("/01", (req, res) => {
    res.status(200).json({ msg: "pagina 01" });
    // addNewUserDb(req.body);
  });

export default publicPages;
