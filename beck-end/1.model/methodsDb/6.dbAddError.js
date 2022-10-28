import chalk from "chalk";

function dbAddError(error) {
  console.error(
    chalk.red.bold.italic.underline.inverse(
      "Erro ao adicionar ao banco de dados: " + error
    )
  );
  var error = error.stack;

  if (error.includes("users_cpf_key")) {
    console.log(chalk.red.bold.italic.underline.inverse("CPF existente"));
  }
  if (error.includes("users_pkey")) {
    console.log(chalk.red.bold.italic.underline.inverse("Usuário existente"));
  }

  if (error.includes("users_email_key")) {
    console.log(chalk.red.bold.italic.underline.inverse("Email existente"));
  }
}

export default dbAddError;
