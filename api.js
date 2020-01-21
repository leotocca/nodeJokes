const request = require("request");

function callJokeAPI(keyword, cb) {
  request(
    `https://icanhazdadjoke.com/search?term=${keyword}`,
    { json: true },
    function(error, response, body) {
      if (error) console.log("Error:", error.message);

      cb(body.results);
    }
  );
}

exports.callJokeAPI = callJokeAPI;
