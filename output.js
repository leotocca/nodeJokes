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
    jokes.forEach(joke => {
      append("joke.txt", `${joke.joke} \n\n`, error => {
        if (error) console.log(error);
        console.log(chalk.green(`"${joke.joke}"`));
      });
    });
  }
}

module.exports.handleResponse = handleResponse;
