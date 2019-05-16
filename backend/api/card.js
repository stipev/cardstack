const { Router } = require("express");

const router = new Router();

router.get("/new", (req, res) => {
  console.log("get!!!");
  res.json({ card: req.app.locals.engine.generation.getCard() });
});

module.exports = router;
