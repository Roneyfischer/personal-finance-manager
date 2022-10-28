import dbConnectionStatus from "./dbConnectionStatus.js";
import chalk from "chalk";
import Pool from "pg-pool";
import * as dotenv from "dotenv";
import {} from "dotenv/config";

async function dbConnect() {
  const pool = new Pool({
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_URL}/${process.env.DB_NAME}`,
    // connectionString: `postgres://vwaseesf:K-XdXLOwVgSFfPr4Z77pAoFWB69lr04D@babar.db.elephantsql.com/vwaseesf`,
  });
  const client = await pool.connect();

  return client;
}

export default dbConnect;
