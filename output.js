const chalk = require("chalk");
const fs = require("fs");

const { appendFile: append } = fs;

function handleResponse(jokes) {
  let result = getRandomJoke(jokes);

  if (result === undefined) {
    console.log(chalk.red("Aca no hacemos chistes con esas cosas"));
  } else {
    console.log(chalk.blue.bgYellow.bold(result));
    append("joke.txt", `${result} \n\n`, error => {
      if (error) console.log(error);
    });
  }
}

function getRandomJoke(jokes) {
  if (jokes.length === 0) {
    return undefined;
  } else {
    return jokes[Math.floor(Math.random() * jokes.length)].joke;
  }
}

module.exports.handleResponse = handleResponse;
