import dbConnect from "../configDb/dbConect.js";
import express from "express";
import * as dotenv from "dotenv";

import app from "./app.js";
import {} from "dotenv/config";
import fs from "fs";
import https from "https";

app.listen(process.env.PORT, () => {
  // dbConnect();
  console.log(
    `server is running at localhost:${process.env.PORT}, with COR_URL_ORIGIN: ${process.env.CORS_URL_ORIGIN}`
  );
});
