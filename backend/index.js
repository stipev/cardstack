const GeneratorEngine = require("./engine.js");

const engine = new GeneratorEngine();
//console.log("engine: ", engine);
engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);
