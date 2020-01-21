let chalk = require("chalk");

class Leaderboard {
  constructor() {
    this.mapOfJokes = new Map();
    this.arr = [];
  }

  addJoke(joke) {
    if (this.mapOfJokes.has(joke)) {
      this.mapOfJokes.set(joke, this.mapOfJokes.get(joke) + 1);
    } else {
      this.mapOfJokes.set(joke, 1);
    }
  }

  getLeaderboardJoke() {
    let keys = Array.from(this.mapOfJokes.keys());
    let values = Array.from(this.mapOfJokes.values());
    if (keys.length === 0) {
      console.log("No hay bromas");
    } else {
      let leaderboard = keys[values.indexOf(Math.max(...values))];
      console.log(`${leaderboard} \n`, chalk.blue(`#ElMasPopular`));
      console.log(this.mapOfJokes);
    }
  }

  logMapOfJokes() {
    console.log(this.mapOfJokes);
  }
}

module.exports = Leaderboard;
