const router = require("express").Router();
const userRoutes = require("./api.js");
const scoreRoutes = require("./scores.js");

// routes
router.use("/user", userRoutes);
router.use("/scores", scoreRoutes);

module.exports = router;
