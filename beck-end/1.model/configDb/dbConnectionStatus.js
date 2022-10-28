import chalk from "chalk";

function dbConnectionStatus(pool, err) {
  var dbConnectedStatus = false;
  pool.on("error", (err, client) => {
    console.log(
      chalk.red.bold.italic.underline.inverse(
        `ERROR CONNETING TO DATABASE!: ${err}`
      )
    );
  });
  pool.on("connected", (err, client) => {
    console.log(
      chalk.red.bold.italic.underline.inverse(
        `ERROR CONNETING TO DATABASE!: ${err}`
      )
    );
  });
}

export default dbConnectionStatus;
