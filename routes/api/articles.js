const router = require("express").Router();
const controllers = require("../../controllers/controllers");

// @route   GET "/api/articles"
// @desc    Get posts
// @access  Public
router.route("/")
  .get(controllers.findAll)
  .post(controllers.create);

// @route   GET "/api/articles/:id"
// @desc    Get posts
// @access  Public
router.route("/:id")
  .get(controllers.findById)
  .put(controllers.update)
  .delete(controllers.remove);

module.exports = router;