const prompt = require("prompt");
const chalk = require("chalk");
const apiCall = require("./api.js");

function askUserForKeyword() {
  let answer = "";

  prompt.start();

  prompt.get([chalk.red("Keyword")], (error, result) => {
    if (error) console.error(error);
    answer = result["\u001b[31mKeyword\u001b[39m"];
    console.log(chalk.yellow(`Keyword provided by user: ${answer}`));
    apiCall.callJokeAPI(answer);
  });
}

exports.askUserForKeyword = askUserForKeyword;
