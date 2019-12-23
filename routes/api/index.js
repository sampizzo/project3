const router = require("express").Router();
const userRoutes = require("./api.js");

// Book routes
router.use("/user", userRoutes);

module.exports = router;
