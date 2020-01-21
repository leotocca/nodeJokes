const userInput = require("./input.js");
const output = require("./output.js");
const apiCall = require("./api.js");
const Leaderboard = require("./leaderboard.js");
const handleResponse = output.handleResponse;

let mapOfJokes = new Leaderboard();

userInput.askUserForKeyword(function(answer) {
  if (answer === "leaderboard") {
    mapOfJokes.getLeaderboardJoke();
  } else if (answer === "log jokes") {
    mapOfJokes.logMapOfJokes();
  } else {
    apiCall.callJokeAPI(answer, handleResponse);
    mapOfJokes.addJoke(answer);
  }
});
