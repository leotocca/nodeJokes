const prompt = require("prompt");
const chalk = require("chalk");

function askUserForKeyword(cb) {
  
  let answer = "";

  prompt.start();

  prompt.get([chalk.red("Keyword")], (error, result) => {
    if (error) console.error(error);
    answer = result["\u001b[31mKeyword\u001b[39m"];
    console.log(chalk.yellow(`Keyword provided by user: ${answer}`));
    cb(answer);
  });
}

exports.askUserForKeyword = askUserForKeyword;
