const chalk = require("chalk");
const fs = require("fs");

const { writeFile: write, readdir: read, appendFile: append } = fs;

function handleResponse(jokes) {
  logResponse(jokes);
  writeResponse(jokes);
}

function logResponse(jokes) {
  if (jokes.length === 0) {
    console.log(chalk.red('"Aca no hacemos chistes con esas cosas"'));
  } else {
    jokes.forEach(joke => {
      console.log(chalk.green(`"${joke.joke}"`));
    });
  }
}

function writeResponse(jokes) {
  read(__dirname, (error, files) => {
    if (error) throw error;
    createJokeTextFile(files, jokes);
    appendJokesToTextFile(jokes);
  });

  function createJokeTextFile(files, jokes) {
    if (!files.includes(`joke.txt`)) {
      if (jokes.length === 0) {
        write(`joke.txt`, `Aca no hacemos chistes con esas cosas.`, error => {
          if (error) throw error;
        });
      } else {
        write(`joke.txt`, jokes[0], error => {
          if (error) throw error;
        });
      }
    }
  }

  function appendJokesToTextFile(jokes) {
    let auxJokes = jokes.slice(1);
    auxJokes.forEach(joke => {
      append("joke.txt", joke, error => {
        console.log(error);
      });
      append("joke.txt", "\n", error => {
        console.log(error);
      });
    });
  }
}

module.exports.handleResponse = handleResponse;
