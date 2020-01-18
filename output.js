const chalk = require("chalk");
const fs = require("fs");

const { appendFile: append } = fs;

function handleResponse(jokes) {
  if (jokes.length === 0) {
    append("joke.txt", `Aca no hacemos chistes con esas cosas`, error => {
      if (error) console.log(error);
      console.log(chalk.red('"Aca no hacemos chistes con esas cosas"'));
    });
  } else {
    console.log(jokes[0].joke);
    append("joke.txt", `${jokes[0].joke} \n\n`, error => {
      if (error) console.log(error);
    });
  }
}

module.exports.handleResponse = handleResponse;
