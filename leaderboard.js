const chalk = require("chalk");
const fs = require("fs");

function getLeader() {
  const mapOfJokes = new Map();
  fs.readFile("joke.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(chalk.red("Please, ask for a keyword first"));
      throw err;
    }

    updateMap(mapOfJokes, data);
    processMapAndLogAnswer(mapOfJokes);
  });
}

function updateMap(mapOfJokes, data) {
  let splittedData = data.split(`\n`);

  splittedData.forEach(joke => {
    if (joke !== "") {
      if (mapOfJokes.has(joke)) {
        mapOfJokes.set(joke, mapOfJokes.get(joke) + 1);
      } else {
        mapOfJokes.set(joke, 1);
      }
    }
  });
}

function processMapAndLogAnswer(mapOfJokes) {
  const keys = Array.from(mapOfJokes.keys());
  const values = Array.from(mapOfJokes.values());

  if (keys.length === 0) {
    console.log("No hay bromas");
  } else {
    const leaderboard = keys[values.indexOf(Math.max(...values))];
    console.log(`${leaderboard} \n`, chalk.blue(`#ElMasPopular`));
  }
}

module.exports = getLeader;
