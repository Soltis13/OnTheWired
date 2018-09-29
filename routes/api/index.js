const router = require("express").Router();
const articleRoutes = require("./articles");

// @route   GET "/articles"
// @desc    Get posts
// @access  Public
// Article routes
router.use("/articles", articleRoutes);

module.exports = router;