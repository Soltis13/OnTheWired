const router = require("express").Router();
const controllers = require("../../controllers/controllers");

// Matches with "/api/articles"
router.route("/")
  .get(controllers.findAll)
  .post(controllers.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(controllers.findById)
  .put(controllers.update)
  .delete(controllers.remove);

module.exports = router;