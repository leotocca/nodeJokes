const userInput = require("./input.js");
const handleResponse = require("./output.js");
const apiCall = require("./api.js");

userInput.askUserForKeyword(function(answer) {
  if (answer === "leaderboard") {
    bla;
  } else {
    apiCall.callJokeAPI(answer, handleResponse.handleResponse);
  }
});
