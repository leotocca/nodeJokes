const request = require("request");
const handleResponse = require("./output.js");

function callJokeAPI(keyword) {
  request(
    `https://icanhazdadjoke.com/search?term=${keyword}`,
    { json: true },
    function(error, response, body) {
      if (error) console.log("Error:", error.message);
      handleResponse.handleResponse(body.results);
    }
  );
}

exports.callJokeAPI = callJokeAPI;
