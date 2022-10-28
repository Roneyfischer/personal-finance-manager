import chalk from "chalk";
import jwt from "jsonwebtoken";
import express from "express";
import * as dotenv from "dotenv";
import fRouter from "../../2.service/routes/A.index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
export default app;
dotenv.config();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_URL_ORIGIN,
    credentials: true,
  })
);

app.use(express.json()); //
app.use(express.urlencoded({ extended: true }));

fRouter(app);
