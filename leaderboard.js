let chalk = require("chalk");

class Leaderboard {
  constructor() {
    this.mapOfJokes = new Map();
  }

  addJoke() {
    if (mapOfJokes.has(joke.joke)) {
      mapOfJokes.set(joke.joke, mapOfJokes.get(joke.joke) + 1);
    } else {
      mapOfJokes.set(joke.joke, 1);
    }
  }

  getLeaderboardJoke() {
    let keys = Array.from(mapOfJokes.keys());
    let values = Array.from(mapOfJokes.values());
    if (keys.length === 0) {
      console.log("No hay bromas");
    } else {
      let leaderboard = keys[values.indexOf(Math.max(...values))];
      console.log(`${leaderboard} \n`, chalk.blue(`#ElMasPopular`));
      console.log(mapOfJokes);
    }
  }

  logMapOfJokes() {
    console.log(this.mapOfJokes);
  }
}

module.exports = Leaderboard;
