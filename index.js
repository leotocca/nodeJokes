const userInput = require("./input.js");
const output = require("./output.js");
const apiCall = require("./api.js");
const leaderboard = require("./leaderboard.js");
const handleResponse = output.handleResponse;

userInput.askUserForKeyword(function(answer) {
  if (answer === "leaderboard") {
    leaderboard();
  } else {
    apiCall.callJokeAPI(answer, handleResponse);
  }
});
