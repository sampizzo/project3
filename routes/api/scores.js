const router = require("express").Router();
const controller = require("../../controller/scoreController");

// Matches with "/api/"
router.route("/")
//   .get(controller.findAll)
  .post(controller.create)
  .get(controller.findAll);
module.exports = router;
