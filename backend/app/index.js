const GenerationEngine = require("./generation/engine.js");
const express = require("express");
const cardRouter = require("../api/card.js");
const generationRouter = require("../api/generation.js");

const engine = new GenerationEngine();
const app = express();

app.locals.engine = engine;

app.use("/card", cardRouter, () => {
  console.log("app use!");
});
app.use("/generation", generationRouter);

engine.start();

module.exports = app;

// setTimeout(() => {
//   engine.stop();
// }, 20000);
