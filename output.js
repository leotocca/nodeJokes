const chalk = require("chalk");
const fs = require("fs");

const { appendFile: append } = fs;

function handleResponse(joke) {
  if (joke.length === 0) {
    console.log(chalk.red("Aca no hacemos chistes con esas cosas"));
  } else {
    console.log(joke);
    append("joke.txt", `${joke} \n\n`, error => {
      if (error) console.log(error);
    });
  }
}

module.exports.handleResponse = handleResponse;
