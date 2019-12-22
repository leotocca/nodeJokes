const prompt = require("prompt");
const apiCall = require("./api.js");
const chalk = require("chalk");

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
