const userInput = require("./input.js");
const handleResponse = require("./output.js");
const apiCall = require("./api.js");
const leaderboard = require("./leaderboard.js");

const mapOfJokes = new leaderboard();

userInput.askUserForKeyword(function(answer) {
  if (answer === "leaderboard") {
    mapOfJokes.getLeaderboardJoke();
  } else if (answer === "log jokes") {
    mapOfJokes.logMapOfJokes();
  } else {
    apiCall.callJokeAPI(answer, handleResponse.handleResponse);
    // mapOfJokes.addJoke(answer);
  }
});
