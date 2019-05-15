const Generation = require("./generation.js");

class GeneratorEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }
  start() {
    console.log("START");
    this.getGeneration();
  }
  stop() {
    console.log("STOP");
    clearTimeout(this.timer);
  }
  getGeneration() {
    this.generation = new Generation();
    console.log("generation: ", this.generation);
    console.log("card: ", this.generation.getCard());
    console.log("card2: ", this.generation.getCard());

    this.timer = setTimeout(() => {
      this.getGeneration();
    }, this.generation.expiration - Date.now());
  }
}

module.exports = GeneratorEngine;
