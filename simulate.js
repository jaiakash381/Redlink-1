const router = require("express").Router();

router.post("/run", (req, res) => {
  res.json({
    status: "Simulation started",
    time: new Date().toISOString()
  });
});

module.exports = router;
