const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/"
router.route("/")
  .get(controller.findAll)
  .post(controller.create)
  .put(controller.update);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
